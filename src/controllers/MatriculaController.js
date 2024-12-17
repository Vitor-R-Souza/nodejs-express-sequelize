const Controller = require('./Controller.js'); // import da base dos controller com funções CRUD
const MatriculaServices = require('../services/MatriculaServices.js'); // import dos serviços de dados de acordo

const matriculaServices = new MatriculaServices(); // criação da instancia

class MatriculaController extends Controller { // criação da classe
  constructor() {
    super(matriculaServices); // passa a instancia dos serviços para a classe
  }
}

module.exports = MatriculaController;
