const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    id: String,
    lesson_title: String,
    teacher: String,
    university: String,
    number: String,
    price: String,
    pic: String
})