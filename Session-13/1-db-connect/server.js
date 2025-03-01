const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://anton:anton@cluster0.1qugo.mongodb.net/test-db?retryWrites=true&w=majority&appName=Cluster0"
);

const User = mongoose.model("users", {
  name: String,
  age: Number,
  email: String,
});

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.post("/add", async (req, res) => {
  const user = new User(req.body);
  const data = await user.save();
  res.json(data);
});

app.get("/all", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.put("/update/:id", async (req, res) => {
  const newData = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(newData);
});

app.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "Data deleted" });
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
