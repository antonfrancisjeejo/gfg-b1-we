const router = require("express").Router();
const { Student } = require("../models");

router.get("/", (req, res) => {
  res.send("Student Route is working");
});

router.post("/add", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
