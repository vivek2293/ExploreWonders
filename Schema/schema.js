const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    emailId: String,
    feedback: String,
    info: [String]
})

module.exports = mongoose.model('feedScheme', feedbackSchema);