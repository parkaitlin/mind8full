const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    date: String,
    title: String,
    quote: String,
    author: String,
    prompt: String,
    entry: String
});

module.exports = mongoose.model('Entry', EntrySchema);

