const express = require('express');
const server = express();
const essencias = require('./src/data/essencias.json');

server.get('/essencias', (req,res) => {
    return res.json(essencias)
});

server.listen(3000, () => {
    console.log('o servidor está funcionando')
});