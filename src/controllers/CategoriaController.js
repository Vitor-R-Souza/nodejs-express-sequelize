const Controller = require('./Controller.js'); // import da base dos controller com funções CRUD
const CategoriaServices = require('../services/CategoriaServices.js'); // import dos serviços de dados de acordo

const categoriaServices = new CategoriaServices(); // criação da instancia

class CategoriaController extends Controller { // cria a classe herdando da base
  constructor() {
    super(categoriaServices); // passa a instancia dos serviços para a classe
  }
}

module.exports = CategoriaController;
