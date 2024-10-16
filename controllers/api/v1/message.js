const index = (req, res, next) => {
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
  }

  module.exports = {
    index,
    show, 
  }