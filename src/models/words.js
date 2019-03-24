import mongoose from 'mongoose';

const wordsSchema = new mongoose.Schema({
    createdAt: new Date(),
    name: {
        type: String,
        unique: true
    },
    language: String,
    list: [listSchema]
});

const listSchema = new mongoose.Schema({
    word: String,
    translation: String
});

const Words = mongoose.model('Words', wordsSchema);

export default Words;