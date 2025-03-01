const mongoose = require("mongoose");

const url =
  "mongodb+srv://anton:anton@cluster0.1qugo.mongodb.net/u-m?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
