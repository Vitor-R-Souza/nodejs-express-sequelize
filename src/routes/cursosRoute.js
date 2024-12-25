const { Router } = require('express');
// Importa o módulo `Router` do Express, que é usado para criar um agrupamento modular de rotas.

const CursoController = require('../controllers/CursoController.js');
// Importa o controlador `Cursocontroller`, que gerencia as operações relacionadas a ele.

const cursoController = new CursoController(); // instancia

const router = Router(); // router

router.get('/cursos', (req, res) => cursoController.pegaTodos(req, res)); // pega todos
router.get('/cursos/:id', (req, res) => cursoController.pegaUmPorId(req, res)); // pega por ID
router.post('/cursos', (req, res) => cursoController.criaNovo(req, res)); // cria
router.put('/cursos/:id', (req, res) => cursoController.atualiza(req, res)); // atualiza
router.delete('/cursos/:id', (req, res) => cursoController.exclui(req, res)); // deleta

module.exports = router;
