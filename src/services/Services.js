/*
services genericos com os comando base do CRUD, para usar herança de classes nos outros serviços
*/

const dataSource = require('../models');

class Services { // conexão entre os modelos e os controllers
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros () { // CRUD (READ)
    return dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) { // CRUD (READ)
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(dadosDoRegistro) { // CRUD (CREATE)
    return dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id) { // CRUD (UPDATE)
    const listadeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
      where: { id: id }
    });
    if (listadeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async excluiRegistro(id) { // CRUD (DELETE)
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
