var express = require('express');
var router = express.Router();

// Define the GET endpoint for "/"
router.get("/", (req, res, next) => {
    res.status(200).json({ 
        status: "success",
        message:  "GET messages",
        data: {
            "messages": [
                {
                    id: 1,
                    user: "user1",
                    message: "message1"
                },
                {
                    id: 2,
                    user: "user2",
                    message: "message2"
                }
            ]
        }
    });
});
//geef één bericht terug op basis van de id
//je kan hier de array keys 0, 1, ... gebruiken of gewoon één bericht terugsturen naar keuze
//als een bericht niet gevonden kan worden kan je status code 404 teruggeven ipv 200

router.get("/:id", (req, res, next) => {
    res.status(200).json({ 
        status: "success",
        message:  "GET message",
        data: {
            "message": {
                id: 1,
            }
        }
    });
}
);

//POST: /api/v1/messages
//deze route voegt één nieuw bericht toe aan je array
//Body: { message: { “user”: “Pikachu”, “text”: “nodejs isn’t hard, or is it?” } }
//zorg dat je de naam en text zelf kan invullen via postman
//je response bevat status en message maar ook .data.message met daarin je nieuw bericht

router.post("/", (req, res, next) => {
    res.status(200).json({ 
        status: "success",
        message:  "POST message",
        data: {
            "message": {
                id: 1,
                
            }
        }
    });
}
);

//PUT: /api/v1/messages/:id
//hiermee kan je een specifiek bericht updaten (vb: text aanpassen)
//je response bevat status en message maar ook .data.message met daarin je nieuw bericht

router.put("/:id", (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "PUT message",
        data: {
            "message": {
                id: 1,
            }
        }
    });
}
);


//DELETE: /api/v1/messages/:id
//verwijder één specifiek bericht uit je array (gebruik array key 0, 1, ... of fake dit)
//geef een correct antwoord terug net zoals we dat hierboven gedaan hebben (status, message)
//je response bevat status en message

router.delete("/:id", (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "DELETE message"
    });
}
);
module.exports = router;

