const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    word: String,
    translation: String
});

const wordsSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    language: String,
    list: [[listSchema]]
});

module.exports = mongoose.model('Words', wordsSchema);