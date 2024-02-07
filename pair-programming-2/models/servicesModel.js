const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  id: Number,
  icon: String,
  title: String,
  text: String,
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
