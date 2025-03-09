const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const users = [
  {
    name: "jake",
    age: 23,
  },
  {
    name: "julie",
    age: 25,
  },
  {
    name: "Ken",
    age: 29,
  },
  {
    name: "James",
    age: 38,
  },
];

app.get("/", (req, res) => {
  res.json({ msg: "Api is working" });
});

app.get("/users", (req, res) => {
  res.json({ users });
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
