const mongoose = require('mongoose');

const practiceMaterialSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Exercise, Question, Test, Instruction
  title: { type: String, required: true },
  description: { type: String },
  link: { type: String }
});

module.exports = mongoose.model('PracticeMaterial', practiceMaterialSchema);
