const mongoose = require('mongoose');

const wordsSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    language: String,
    list: [
        {
            _id: Number,
            word: String,
            translation: String
        }
    ]
});

module.exports = mongoose.model('Words', wordsSchema);