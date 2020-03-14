const mongoose = require('mongoose');
const chapterSchema = require('../schema/chapters');

module.exports = mongoose.model('Chapter', chapterSchema);