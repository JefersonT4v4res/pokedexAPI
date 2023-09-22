//Gerencia as requisições
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser');
//Chamar função express
const app = express();
//Incluir as controllers
const pokemons = require('./config/routes');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

//criar as rotas
app.use('/', pokemons);


app.listen(8080, () => {
console.log('Server started');
});