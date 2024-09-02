const express = require('express');
const app = express ();

app.use("/", (req,res) => {
    res.send ("Servidor funcional");
});

app.listen(5000, console.log("Servidor funcinal en el puerto 5000"));