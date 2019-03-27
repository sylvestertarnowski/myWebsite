const mongoose = require('mongoose');

const wordsSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    language: String,
    list: [
        {
            word: String,
            translation: String
        }
    ]
});

module.exports = mongoose.model('Words', wordsSchema);