const express = require('express');
const pessoas = require('./pessoasRoute.js');
const categorias = require('./categoriasRoute.js');
const cursos = require('./cursosRoute.js');
// importação do express e todas as rotas

// passa todas as rotas e modulo de json do express para ser usado pelo servidos, assim precisando apenas importar o index
module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    categorias,
    cursos
  );
};
