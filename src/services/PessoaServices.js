const Services = require('./Services.js');
// Importa a classe base `Services`, que fornece métodos genéricos para operações de CRUD (Create, Read, Update, Delete).

class PessoaServices extends Services { // cria a classe herdando tudo de services
  constructor() {
    super('Pessoa'); //chama a classe pai passando o nome do modelo para associar aos metodos genericos
  }

  async pegaMatriculasPorEstudante(id){ // Método para buscar as matrículas associadas a um estudante específico.
    // Usa o método `pegaUmRegistroPorId` da classe base para buscar o estudante com base no ID.
    const estudante = await super.pegaUmRegistroPorId(id);
    // Chama o método `getAulasMatriculadas` do estudante, que é uma associação no modelo `Pessoa` configurada no Sequelize.
    // Esse método retorna as matrículas relacionadas ao estudante.
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas; // retorna os dados buscados
  }
}

module.exports = PessoaServices;
