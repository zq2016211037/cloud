const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    id: String,
    teacher: String,
    lesson_title: String,
    living_time: String,
    chapter: String,
    pic: String,
    lesson_id: String
})