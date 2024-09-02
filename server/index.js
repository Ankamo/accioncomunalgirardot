const express = require('express');
const app = express();
const PORT = 5000;

app.use("/", (req, res) => {
    res.send("Servidor funcional");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});