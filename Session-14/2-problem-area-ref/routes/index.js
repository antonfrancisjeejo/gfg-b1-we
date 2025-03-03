const router = require("express").Router();
const mentorRouter = require("./mentor");
const studentRouter = require("./student");

router.use("/mentor", mentorRouter);
router.use("/student", studentRouter);

module.exports = router;
