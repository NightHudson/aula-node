const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/sobre', (req, res) => {
    res.send('Desenvolvido pelo Hudson');
});

app.get('/Abaut', (req, res) => {
    res.send('Desenvolvido pelo Hudson');
});

app.get('/Contacts', (req, res) => {
    res.send('Desenvolvido pelo Hudson');
});

app.listen(3000, () => {
    console.log('Servidor rodando no http://localhost:3000')
});