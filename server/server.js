const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000; // Define el puerto en una constante

app.use(cors());

// Configuración de la ruta
app.get("/api/home", (req, res) => {
    res.json({ message: "Hola a Todos!", people: ["Harry", "Jack", "Barry", "Camilo"] });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
