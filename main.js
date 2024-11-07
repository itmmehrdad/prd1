console.log("test");
const express = require("express");
const app = express();
const port = 5500;

app.get("/sabtenam", (req, res) => {
  res.send("samt nam ba movafaghet anjam shod");
});

app.get("/test", (req, res) => {
  res.send("in yek test ast ");
});
app.listen(port, () => {
  console.log(`11111Example app listening on port ${port}`);
});
