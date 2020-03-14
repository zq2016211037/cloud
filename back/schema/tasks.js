const mongoose = require('mongoose');

module.exports = mongoose.Schema({
    id: String,
    taskName: String,
    progress: Number
})