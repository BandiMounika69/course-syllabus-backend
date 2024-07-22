const mongoose = require('mongoose');

const SyllabusSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  courseTitle: { type: String, required: true },
  syllabus: { type: String, required: true }
});

module.exports = mongoose.model('Syllabus', SyllabusSchema);
