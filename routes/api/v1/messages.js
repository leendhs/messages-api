const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "GET messages",
        data: {
        messages: [{
                "user": "Leen",
                "message": "yoo sjoeke"
            },
            {
                "user": "Julie",
                "message": "i love you emiel" 
            }
        ]
        }
    });
});

module.exports = router; 