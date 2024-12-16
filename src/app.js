const express = require('express');
const routes = require('./routes'); // importando todas as rotas

const app = express();
routes(app); // mandando o express para as rotas

module.exports = app;
