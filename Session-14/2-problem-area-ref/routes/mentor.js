const router = require("express").Router();
const { Mentor } = require("../models");

router.get("/", (req, res) => {
  res.send("Mentor Route is working");
});

router.post("/add", async (req, res) => {
  try {
    const mentor = await Mentor.create(req.body);
    res.json(mentor);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Mentor.find().populate(
      "students",
      "-mentor -createdAt -updatedAt"
    );
    res.json({ data });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
