const Services = require('./Services.js');
// Importa a classe base `Services`, que fornece métodos genéricos para operações de CRUD (Create, Read, Update, Delete).

class CategoriaServices extends Services { // cria a classe herdando tudo de services
  constructor() {
    super('Categoria'); //chama a classe pai passando o nome do modelo para associar aos metodos genericos
  }
}

module.exports = CategoriaServices;
