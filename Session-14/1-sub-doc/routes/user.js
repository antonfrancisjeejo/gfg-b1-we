const router = require("express").Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("Student Route is working");
});

router.post("/add", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.put("/add-sport/:userId", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $push: { sports: req.body },
      },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.put("/remove-sport/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const sport = await user.sports.id(req.body.id);
    await sport.deleteOne();
    await user.save();
    res.json(user);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/filter", async (req, res) => {
  try {
    // const data = await User.find({ age: { $gt: 18 } });
    // const data = await User.find({ age: { $lt: 18 } });
    // const data = await User.find({ age: { $gte: 18 } });
    // const data = await User.find({ age: { $lte: 18 } });
    // const data = await User.find()
    //   .sort({ age: "desc" })
    //   .select("name email age");
    const data = await User.find().sort({ age: "asc" }).select("-sports -age");
    res.json(data);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
