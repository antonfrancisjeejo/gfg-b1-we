const express = require("express");
const app = express();
const connectDb = require("./config/db");
const userRouter = require("./routes/user");

connectDb();

app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(6000, () => {
  console.log("Server is up and running");
});
