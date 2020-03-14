const mongoose = require('mongoose');
const taskSchema = require('../schema/tasks');

module.exports = mongoose.model('Task', taskSchema);