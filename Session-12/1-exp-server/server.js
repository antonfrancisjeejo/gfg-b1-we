const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/hello", (req, res) => {
  res.send("<h1>This is hello route</h1>");
});

app.get("*", (req, res) => {
  res.send("<h1>404 Page not found</h1>");
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
