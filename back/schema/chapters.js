const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    id: String,
    lesson_id: String,
    chapter_name: String,
    section_name: String,
    chapter_number: Number,
    section_number: Number,
    video: String,
    timeLong: String,
    teacher: String,
    teacher_id: String
})