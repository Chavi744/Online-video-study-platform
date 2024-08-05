const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  course: String,
  grade: Number,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  motivation: Number, // שדה לרמת המוטיבציה
  grades: [gradeSchema], // רשימה של ציונים
});

const User = mongoose.model('User', userSchema);
module.exports = User;
