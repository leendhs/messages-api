const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
        status: "success",
        message: "GET messages",
        data: {
            "messages": {
                
            }
        }
    });
});

module.exports = router; 