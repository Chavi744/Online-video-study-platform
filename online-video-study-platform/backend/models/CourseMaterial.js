const mongoose = require('mongoose');

const courseMaterialSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  imageUrl: String,
});

const CourseMaterial = mongoose.model('CourseMaterial', courseMaterialSchema);

module.exports = CourseMaterial;
