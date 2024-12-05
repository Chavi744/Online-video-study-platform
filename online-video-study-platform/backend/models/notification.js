const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  courseId: String,
  message: String,
  timestamp: Date
});

module.exports = mongoose.model('Notification', notificationSchema);
