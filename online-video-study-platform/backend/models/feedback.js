const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  courseId: String,
  feedback: String,
  timestamp: Date
});

module.exports = mongoose.model('Feedback', feedbackSchema);
