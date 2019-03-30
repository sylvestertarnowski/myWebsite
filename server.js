const express     = require('express');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
const path        = require('path');
const WordsRouter = require('./WordsRouter');
const app         = express();
const port        = process.env.PORT || 5000;

// < --- database connect --- >
const mongoDB = 'mongodb://localhost:27017/myWebsite'
mongoose.set('useCreateIndex', true);
mongoose.connect(mongoDB, {useNewUrlParser: true})
        .then(() => {console.log('Database is connected')},
        err => {console.log('Cannot connect to the database' + err)}
);

// < --- initial setup --- >
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// < --- routes --- >
app.use('/words', WordsRouter);

app.get('/express_backend', (req, res) => {
    res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => console.log(`Listening on port ${port}`));