const express = require("express");
require("dotenv").config();
const app = express();
const connectDb = require("./config/db");
const userRouter = require("./routes/user");
const cors = require("cors");

connectDb();

app.use(cors());

app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
