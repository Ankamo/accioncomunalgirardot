const express = require("express");
const cors = require("cors");
const homeRoutes = require("./routes/home");

const app = express();
const PORT = 8080;

app.use(cors());
app.use("/api", homeRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
