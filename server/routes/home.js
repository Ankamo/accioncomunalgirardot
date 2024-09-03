const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
    res.json({ message: "Like this video!", people: ["Arpan", "Jack", "Barry"] });
});

module.exports = router;
