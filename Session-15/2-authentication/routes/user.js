const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verify");

router.get("/", (req, res) => {
  res.send("User route is working");
});

router.post("/signup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password,
    });
    const data = await user.save();

    res.json({ msg: "Signed up successfully" });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        const token = jwt.sign({ id: user._id }, "secretkey");
        return res.json({ token });
      } else {
        return res.json({ msg: "Wrong Password" });
      }
    } else {
      return res.json({ msg: "No user found" });
    }
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/data", verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId).select("-password");
    res.json({ user });
  } catch (error) {
    return res.json({ msg: error.message });
  }
});

module.exports = router;
