const Controller = require('./Controller.js'); // import da base dos controller com funções CRUD
const CursoServices = require('../services/CursoServices.js'); // import dos serviços de dados de acordo

const cursoServices = new CursoServices(); // criação da instancia

class CursoController extends Controller { // criação da classe
  constructor() {
    super(cursoServices); // passa a instancia dos serviços para a classe
  }
}

module.exports = CursoController;
