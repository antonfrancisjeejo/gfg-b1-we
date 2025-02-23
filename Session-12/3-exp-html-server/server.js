const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "html", "index.html"));
});

app.post("/add", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  res.send(`<h1>The result is ${num1 + num2} </h1>`);
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
