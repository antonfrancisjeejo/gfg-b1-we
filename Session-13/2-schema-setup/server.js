const express = require("express");
const app = express();
const connectDB = require("./config/db");
const apiRouter = require("./routes");

connectDB();

app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
