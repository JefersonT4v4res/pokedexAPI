const express = require('express');
const routes = express.Router();
const pokemons = require('./../src/data/pokemons.json');

// Buscar dados
routes.get('/pokemons', (request, response) => {
    return response.json(pokemons)
});


module.exports = routes;