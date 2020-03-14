const mongoose = require('mongoose');
const lessonSchema = require('../schema/lessons');

module.exports = mongoose.model('Lesson', lessonSchema);