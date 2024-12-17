/*
classe chamada `Services`, que oferece métodos genéricos para operações básicas de CRUD (Create, Read, Update, Delete).
A classe é projetada para ser usada como base para outros serviços específicos, através de herança.
*/

// Importa o `dataSource`, que contém os modelos definidos no Sequelize.
const dataSource = require('../models'); 

class Services { // conexão entre os modelos e os controllers
  constructor(nomeDoModel) {  // O construtor recebe o nome de um modelo e associa à instância.
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros () { // Método para buscar todos os registros (CRUD - READ).
    return dataSource[this.model].findAll(); 
    // Usa o método `findAll` do Sequelize para retornar todos os registros do modelo especificado.
  }

  async pegaUmRegistroPorId(id) { // Método para buscar um registro por ID (CRUD - READ).
    return dataSource[this.model].findByPk(id);
    // Usa `findByPk` do Sequelize para buscar um registro específico com base na chave primária (Primary Key).
  }

  async criaRegistro(dadosDoRegistro) { // Método para criar um novo registro (CRUD - CREATE).
    return dataSource[this.model].create(dadosDoRegistro);
    // Usa `create` do Sequelize para inserir um novo registro no banco de dados.
  }

  async atualizaRegistro(dadosAtualizados, id) { // Método para atualizar um registro existente (CRUD - UPDATE).
    const listadeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
      where: { id: id } // Especifica a condição `where` para encontrar o registro com o ID correspondente.
    });
    if (listadeRegistrosAtualizados[0] === 0) { // Verifica se nenhum registro foi atualizado.
      return false;
    }
    return true;
  }

  async excluiRegistro(id) { // Método para excluir um registro (CRUD - DELETE).
    return dataSource[this.model].destroy({ where: { id: id } });
    // Usa `destroy` do Sequelize para excluir o registro com o ID correspondente.
  }
}

module.exports = Services;
