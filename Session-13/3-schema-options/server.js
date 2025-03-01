const express = require("express");
const app = express();
const connectDB = require("./config/db");
const userRouter = require("./routes/user");

connectDB();

app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
