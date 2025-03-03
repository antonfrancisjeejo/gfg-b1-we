const router = require("express").Router();
const { Student, Mentor } = require("../models");

router.get("/", (req, res) => {
  res.send("Student Route is working");
});

router.post("/add", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    const mentor = await Mentor.findByIdAndUpdate(
      req.body.mentor,
      {
        $push: { students: student._id },
      },
      { new: true }
    );
    res.json({ student, mentor });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Student.find().populate(
      "mentor",
      "name email contact_no"
    );
    res.json({ data });
  } catch (error) {
    res.json({ msg: error.message });
  }
});
module.exports = router;
