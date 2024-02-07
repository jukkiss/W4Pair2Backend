const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables from .env

const MONGO_URI = process.env.MONGO_URI; // Access the database URI from .env

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
