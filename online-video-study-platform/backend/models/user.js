// models/User.js
const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  course: String,
  grade: Number,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  motivation: Number,
  grades: [gradeSchema],
  course: String,
  year: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
