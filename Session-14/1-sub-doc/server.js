const express = require("express");
const connectDB = require("./config/db");
const userRouter = require("./routes/user");

connectDB();

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
