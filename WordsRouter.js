const express = require('express');
const WordsRouter = express.Router();

const Words = require('./src/models/words');

WordsRouter.route('/add').post(function (req, res) {
    const words = new Words(req.body);
    words.save()
         .then(words => {
             res.json('Words added successfully');
         })
         .catch(err => {
             res.status(400).send('unable to save to database' + err);
         });
});

module.exports = WordsRouter;