const mongoose = require('mongoose');
const timelineSchema = require('../schema/timelines');

module.exports = mongoose.model('Timeline', timelineSchema);