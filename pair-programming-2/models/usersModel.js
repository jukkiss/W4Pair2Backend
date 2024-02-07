const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  username: String,
  email: String,
  role: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
