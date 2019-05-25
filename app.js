const express     = require('express');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
const path        = require('path');
const WordsRouter = require('./WordsRouter');
const app         = express();
const port        = process.env.PORT || 3000;

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
app.use(express.static('public'));
app.use(express.static(__dirname + '/apps/words-learning-app'));
app.use(express.static(__dirname + '/apps/calculator-app'));
app.use(express.static(__dirname + '/apps/hotree'));

// < --- routes --- >
app.use('/words', WordsRouter);

app.get('/hotree', (req, res) => {
    res.sendFile(path.join(__dirname, 'apps/hotree', 'hotree.html'));
});

app.get('/words-learning-app', (req, res) => {
    res.sendFile(path.join(__dirname, 'apps/words-learning-app', 'main.html'));
});

app.get('/todo-app', (req, res) => {
    res.sendFile(path.join(__dirname, 'apps/todo-app', 'todo-app.html'));
});

app.get('/color-game', (req, res) => {
    res.sendFile(path.join(__dirname, 'apps/color-game', 'colorGame.html'));
});

app.get('/calculator-app', (req, res) => {
    res.sendFile(path.join(__dirname, 'apps/calculator-app', 'calculator-app.html'));
});

app.get('/express_backend', (req, res) => {
    res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => console.log(`Listening on port ${port}`));