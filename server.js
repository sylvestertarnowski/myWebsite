const express = require('express');
const mongoose = require('mongoose');
import WordsModel from "./src/models/words";

const app = express();
const port = process.env.PORT || 5000;

//database connect
const mongoDB = 'mongodb://localhost:27017/myWebsite'
mongoose.set('useCreateIndex', true);
mongoose.connect(mongoDB, {useNewUrlParser: true});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
    res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

