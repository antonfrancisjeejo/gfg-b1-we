const express = require("express");
const users = require("./users.json");
const cars = require("./cars.json");
const app = express();
const jwt = require("jsonwebtoken");

const secretKey = "#dsg234XBefgs";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("it's working");
});

app.post("/login", (req, res) => {
  const user = users.find((user) => user.username === req.body.username);

  if (user) {
    if (user.password === req.body.password) {
      const token = jwt.sign({ userId: user.id }, secretKey);
      return res.json({ token });
    } else {
      return res.json({ msg: "Wrong password" });
    }
  } else {
    return res.json({ msg: "No user found" });
  }
});

function checkToken(req, res, next) {
  const token = req.headers["authorization"];
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.json({ msg: "Token invalid" });
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  } else {
    return res.json({ msg: "Token is missing" });
  }
}

app.get("/data", checkToken, (req, res) => {
  const data = cars.filter((car) => car.userId == req.userId);
  res.json({ data });
});

app.listen(6000, () => {
  console.log("Server is up and running");
});
