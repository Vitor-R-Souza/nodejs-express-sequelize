const { Router } = require('express');
// Importa o módulo `Router` do Express, que é usado para criar um agrupamento modular de rotas.

const CategoriaController = require('../controllers/CategoriaController.js');
// Importa o controlador `Categoriacontroller`, que gerencia as operações relacionadas a ele.

const categoriaController = new CategoriaController(); // instancia

const router = Router(); // router

router.get('/categorias', (req, res) => categoriaController.pegaTodos(req, res)); // pega todos
router.get('/categorias/:id', (req, res) => categoriaController.pegaUmPorId(req, res)); // pega por ID
router.post('/categorias', (req, res) => categoriaController.criaNovo(req, res)); // cria
router.put('/categorias/:id', (req, res) => categoriaController.atualiza(req, res)); // atualiza
router.delete('/categorias/:id', (req, res) => categoriaController.exclui(req, res)); // exclui

module.exports = router;
