const router = require("express").Router();
const users = require("../../data/users");

router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;
