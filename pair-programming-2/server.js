
require('dotenv').config();

// db.js

require('dotenv').config();

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Muut asetukset tarvittaessa
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

//yläpuolelle tehty koodi
const express = require("express");
const error = require("./middleware/errorMiddleware");
const found = require("./middleware/notFoundMiddleware");

const app = express();

// Body Parser Middleware
app.use(express.json());

// Init middleware
app.use(error);

app.use("/api/users", require("./routers/usersRoutes"));

app.use("/api/services", require("./routers/servicesRoutes"));

app.use("/api/tours", require("./routers/toursRoutes"));

// Body Parser Middleware
app.use(express.json());

app.use(found);

const PORT = 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
