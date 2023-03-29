const express = require("express");
const app = express();
const port = 8000;
const name = process.env.NAME || "Tony";
app.listen(port, () => console.log(`on port ${port}`));
app.get("/", (req, res) => {
  res.send(`name ${name}`);
});
