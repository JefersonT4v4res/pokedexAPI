const express = require('express');
const morgan = require('morgan');
const routes = require('./config/routes');

const server = express();

server.use(morgan('dev'));
server.use(routes);

server.listen(3000, () => {
console.log('Server started');
});