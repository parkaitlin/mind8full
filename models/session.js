const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    date: String,
    quote: String,
    prompt: String,
    duration: String //may not be able to incorporate -- would be a future improvement
})

module.exports = mongoose.model('Session', SessionSchema);