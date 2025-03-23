const mongoose = require("mongoose");

const url = process.env.DB_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
