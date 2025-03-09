const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const email = "antongfgb@gmail.com";
const pwd = "ujfjoyafcalniqmo";

router.get("/", (req, res) => {
  res.send("User Route is working");
});

router.post("/signup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password,
    });
    const token = jwt.sign({ id: user._id }, "secretkey");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: pwd,
      },
    });

    let info = await transporter.sendMail({
      from: "Tech Info <antongfgb@gmail.com>",
      to: req.body.email,
      subject: "Verify your Email  - Tech Info",
      html: `
        <div>
        <strong>${req.body.name}</strong>, we welcome to our platform.
        <a href="http://localhost:4000/user/verify/${token}">Verify Email</a>
        <div>
        <p>Thanks and Regards</p>
        <p>Tech Info Team</p>
        </div>
        </div>
        `,
    });

    console.log(info);

    res.json({ msg: "Signed up successfully" });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (user.verified) {
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
          const token = jwt.sign({ id: user._id }, "secretkey");
          return res.json({ token });
        } else {
          return res.json({ msg: "Wrong Password" });
        }
      } else {
        return res.json({ msg: "Please verify your account" });
      }
    } else {
      return res.json({ msg: "No user found" });
    }
  } catch (error) {}
});

router.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;
    jwt.verify(token, "secretkey", async (err, decoded) => {
      if (err) {
        return res.json({ msg: "Invalid url" });
      } else {
        await User.findByIdAndUpdate(decoded.id, { verified: true });
        return res.json({ msg: "Account verified" });
      }
    });
  } catch (error) {}
});

module.exports = router;
