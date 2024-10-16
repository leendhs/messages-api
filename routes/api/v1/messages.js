


// Add routes
const express = require("express");
const router = express.Router();

const messageController = require("../../../controllers/api/v1/message"); 

router.get("/", messageController.index); 

// GET /api/v1/messages
router.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "GET messages",
    data: {
      messages: [
        {
          id: 1,
          message: "Hello World",
          user: "John Doe",
        },
        {
          id: 2,
          message: "Hello Universe",
          user: "Jane Doe",
        },
      ],
    },
  });
});

// GET /api/v1/messages/:id
router.get("/:id", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "GET message",
    data: {
      message: {
        id: req.params.id,
        message: "Hello World",
        user: "John Doe",
      },
    },
  });
});

// POST /api/v1/messages
router.post("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "POST messa-ge",
    data: {
      message: req.body.message,
      user: req.body.user,
    },
  });
});

// PUT /api/v1/messages/:id
router.put("/:id", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "PUT message",
    data: {
      message: req.body.message,
      user: req.body.user,
    },
  });
});

// DELETE /api/v1/messages/:id
router.delete("/:id", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "DELETE message",
    data: {
      message: {
        _id: req.params.id,
      },
    },
  });
});

const getByBuyer = async (req, res) => {
  try {
    const messages = await Message.find({user: req.query.user});
    if (messages.length === 0){
      return res.status(404).json({
        status: 'error',
        message: 'no messages found for this user',
      });
    }
    res.json({
      status: 'success',
      data: {
        messages: messages,
      }
    });
  }
  catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'could not retrieve messages',
      error: err.message,
    });
  }
}


module.exports = router;

