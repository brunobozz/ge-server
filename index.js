const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use("/roms", express.static("roms"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
