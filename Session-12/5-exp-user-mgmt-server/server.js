const express = require("express");
const path = require("path");

const app = express();

app.use("/css", express.static("css"));
app.use("/javascript", express.static("js"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "html", "index.html"));
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
