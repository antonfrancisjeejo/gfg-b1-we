const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    contact_no: String,
  },
  { timestamps: true }
);

const Student = mongoose.model("students", StudentSchema);

module.exports = Student;
