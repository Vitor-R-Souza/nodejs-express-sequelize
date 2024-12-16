/* 
Controller genérico com os comandos de CRUD (Create, Read, Update, Delete).
Este controller é usado como uma base para outros controllers através de herança de classe.
Ele abstrai as operações CRUD, permitindo que as classes filhas manipulem entidades específicas.
*/

class Controller {
  constructor(entidadeService) {
    // O construtor recebe um serviço que contém as operações da camada de dados (entidadeService).
    // Esse serviço será usado para executar as operações no banco de dados ou fonte de dados.
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) { // Método para listar todos os registros (READ)
    try {
      // Chama o serviço para obter todos os registros.
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro); // retorna os dados com sucesso
    } catch (erro) {
      // erro, to do
    }
  }

  async pegaUmPorId(req, res) { // Método para obter um registro específico por ID (READ)
    const { id } = req.params; // Extrai o parâmetro "id" da requisição.
    try {
      // Chama o serviço para buscar o registro correspondente ao ID.
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
      return res.status(200).json(umRegistro); // returna os dados com sucesso
    } catch (erro) {
      // erro, to do
    }
  }

  async criaNovo(req, res) { // Método para criar um novo registro (CREATE)
    const dadosParaCriacao = req.body; // Obtém os dados do corpo da requisição.
    try {
      // Chama o serviço para criar o registro com os dados fornecidos.
      const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(200).json(novoRegistroCriado); // retorna os dados com sucesso
    } catch (erro) {
      // erro, to do
    }
  }

  async atualiza(req, res) { // Método para atualizar um registro (UPDATE)
    const { id } = req.params; // Extrai o parâmetro "id" da requisição.
    const dadosAtualizados = req.body; // Obtém os dados do corpo da requisição.
    try {
      // atualiza os dados atraves dos serviços
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: 'registro não foi atualizado' }); // aviso de falha
      }
      return res.status(200).json({ mensagem: 'Atualizado com sucesso' }); // aviso de sucesso
    } catch (erro) {
      // erro, to do
    }
  }

  async exclui(req, res) { // Método para excluir um registro (DELETE)
    const { id } = req.params; // Extrai o parâmetro "id" da requisição.
    try {
      // chama o serviço para excluir o dado com o ID
      await this.entidadeService.excluiRegistro(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` }); // aviso de sucesso
    } catch (error) {
      return res.status(500).json(error.message); // avisa que o processo foi falho com a mensagem de erro
    }
  }
}

module.exports = Controller;
