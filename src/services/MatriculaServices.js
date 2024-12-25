const Services = require('./Services.js');
// Importa a classe base `Services`, que fornece métodos genéricos para operações de CRUD (Create, Read, Update, Delete).

class MatriculaServices extends Services { // cria a classe herdando tudo de services
  constructor() {
    super('Matricula'); //chama a classe pai passando o nome do modelo para associar aos metodos genericos
  }
}

module.exports = MatriculaServices;
