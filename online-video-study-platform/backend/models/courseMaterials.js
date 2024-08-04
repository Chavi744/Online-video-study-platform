const mongoose = require('mongoose');

const courseMaterialSchema = new mongoose.Schema({
  degreeId: { type: Number, required: true },
  courseId: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  available: { type: Boolean, required: true },
  videoUrl: { type: String, required: false } // שדה לוידאו
});

const CourseMaterial = mongoose.model('CourseMaterial', courseMaterialSchema);

module.exports = CourseMaterial;
