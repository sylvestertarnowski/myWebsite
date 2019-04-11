const express = require('express');
const WordsRouter = express.Router();

const Words = require('./src/models/words');

WordsRouter.route('/add').post(function (req, res) {
    const words = new Words(req.body);
    console.log(words);
    words.save()
         .then(words => {
             res.json('Words added successfully');
         })
         .catch(err => {
             res.status(400).send('unable to save to database' + err);
         });
});

WordsRouter.route('/default').get(function (req, res) {
    Words.findOne().exec((err, wordsEntry) => {
        if (err) {
            console.log('There was an error retreiving data, here is error: ' + err);
            return handleError(err);
        }
        if (wordsEntry) {
            console.log(wordsEntry);
            return res.send(wordsEntry);
        }
    })
})

WordsRouter.route('/find').post((req, res) => {
    Words.findOne(req.body).exec((err, entry) => {
        if (err) {
            console.log('There was an error trying to find the list: ' + err);
            return handleError(err);
        }
        if (entry) {
            console.log(entry);
            return res.send(entry);
        }
    })
})

WordsRouter.route('/all').get((req, res) => {
    Words.find({}).exec((err, data) => {
        if (err) {
            console.log('There was an error trying to find the list: ' + err);
            return handleError(err);
        }
        if (data) {
            console.log(data);
            return res.send(data);
        }
    })
})

module.exports = WordsRouter;