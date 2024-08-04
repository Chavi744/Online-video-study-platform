const mongoose = require('mongoose');

const forumPostSchema = new mongoose.Schema({
  courseId: { type: Number, required: true },
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  replies: [
    {
      author: { type: String },
      content: { type: String },
      date: { type: Date, default: Date.now },
    },
  ],
});

const ForumPost = mongoose.model('ForumPost', forumPostSchema);

module.exports = ForumPost;
