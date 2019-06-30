const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    date: String,
    quote: String,
    prompt: String,
    duration: String,
})

module.exports = mongoose.model('Session', SessionSchema);