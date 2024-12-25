const { Router } = require('express'); 
// Importa o módulo `Router` do Express, que é usado para criar um agrupamento modular de rotas.

// Importa o controlador `PessoaController` e `MatriculaControler`, que gerencia as operações relacionadas a ambos.
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaControler = require('../controllers/MatriculaController.js');

// instancia os controllers
const pessoaController = new PessoaController();
const matriculaControler = new MatriculaControler();

const router = Router(); // cria o router para gerenciar essas rotas

router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res)); // pega todos
router.get('/pessoas/:id', (req, res) => pessoaController.pegaUmPorId(req, res)); // pega por um ID
router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res)); // cria
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res)); // atualiza
router.delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res)); // deleta

// Define uma rota GET para listar as matrículas de um estudante específico, chamando `pegaMatriculas`.
router.get('/pessoas/:estudanteId/matriculas', (req, res) => pessoaController.pegaMatriculas(req, res));

// Define uma rota POST para criar uma nova matrícula para um estudante específico, chamando `criaNovo` do `MatriculaController`.
router.post('/pessoas/:estudanteId/matriculas', (req, res) => matriculaControler.criaNovo(req, res));

module.exports = router;
