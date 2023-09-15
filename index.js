const express = require('express');
const server = express();
const pokemons = require('./src/data/pokemons.json');

server.get('/pokemons', (req, res) => {
    return res.json(pokemons)
});

server.listen(3000, () => {
console.log('Blip blop blin... Servidor está funcionando')

});