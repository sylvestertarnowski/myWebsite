import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
    word: String,
    translation: String
});

const wordsSchema = new mongoose.Schema({
    createdAt: Date,
    name: {
        type: String,
        unique: true
    },
    language: String,
    list: [[listSchema]]
});


const WordsModel = mongoose.model('WordsModel', wordsSchema);

export default WordsModel;