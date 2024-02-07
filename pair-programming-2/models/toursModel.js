
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  id: Number,
  image: String,
  date: String,
  title: String,
  info: String,
  location: String,
  duration: Number,
  cost: Number,
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
