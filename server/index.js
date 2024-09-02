const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Like this video!", people: ["Arpan", "Jack", "Barry"] });
});

app.listen(PORT, () => {
    console.log(`Servidor funcional en el puerto ${PORT}`);
});
