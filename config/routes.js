const express = require('express');
// Chama a função express
const routes = express.Router();
const pokelist = require("../src/data/pokemons.json");

// Buscar dados
routes.get("/pokemons", async (request, response) => {

        return response.json({
             pokelist
        });
});

module.exports = routes;