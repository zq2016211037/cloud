const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
    checkPass: String,
    role: Number
})