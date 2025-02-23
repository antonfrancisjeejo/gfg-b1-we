const router = require("express").Router();
const todos = require("../../data/todos");

router.get("/", (req, res) => {
  res.json(todos);
});

module.exports = router;
