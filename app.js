const fs = require('fs');
const express = require('express');
const { rockP1, paperP1, scissorsP1, gameRestart } = require('./utils/script.js')
const app = express();
const port = 3000;

// Using ejs
app.set('view engine', 'ejs');

// Build in middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    const title = 'landing page';
    res.render('index', { title });
});

app.get('/game', (req, res) => {
    const title = 'game page';
    const playerOne = null;
    const playerCom = null;
    const result = null;
    res.render('game', { title, playerOne, playerCom, result });
});

app.post('/submit-game', (req, res) => {
    res.redirect('game');
});

app.post('/submit-index', (req, res) => {
    res.redirect('/');
});

app.post('/submit-restart', (req, res) => {
    res.redirect('/game');
});

app.post('/submit-rock', (req, res) => {
    const title = 'game page';
    const value = rockP1();
    const playerOne = value.valueOne;
    const playerCom = value.valueCom;
    const result = value.result;
    res.render('game', { title, playerOne, playerCom, result });
});

app.post('/submit-paper', (req, res) => {
    const title = 'game page';
    const value = paperP1();
    const playerOne = value.valueOne;
    const playerCom = value.valueCom;
    const result = value.result;
    res.render('game', { title, playerOne, playerCom, result });
});

app.post('/submit-scissors', (req, res) => {
    const title = 'game page';
    const value = scissorsP1();
    const playerOne = value.valueOne;
    const playerCom = value.valueCom;
    const result = value.result;
    res.render('game', { title, playerOne, playerCom, result });
});

app.get('*', (req, res) => {
    res.status(404);
    res.send('<h1>404 Page not found!</h1>');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});