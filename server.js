const express = require('express');

const server = express();

const path = require('path');
 
 
server.use(express.static(path.join(__dirname, 'public')));
 
server.use(express.static(path.join(__dirname, 'views')));
 
server.use(express.json());

server.use(express.urlencoded({ extended: true }));
 
 
server.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'views/index.html'));

});
 
server.get('/adicionar', (req, res) => {

    res.sendFile(path.join(__dirname, 'views/adicionar.html'));

});
 
 
server.get('/biblioteca', (req, res) => {

    res.sendFile(path.join(__dirname, 'views/biblioteca.html'));

});
 
server.listen(3000, () => {

    console.log('Servidor rodando na porta 3000');

});