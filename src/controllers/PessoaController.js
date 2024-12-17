const Controller = require('./Controller.js'); // import da base dos controller com funções CRUD
const PessoaServices = require('../services/PessoaServices.js'); // import dos serviços de dados de acordo

const pessoaServices = new PessoaServices(); // criação da instancia

class PessoaController extends Controller { // criação da classe
  constructor() {
    super(pessoaServices); // passa a instancia dos serviços para a classe
  }

  async pegaMatriculas(req, res){ // Método para obter as matrículas de um estudante específico.
    const { estudanteId } = req.params; // Extrai o parâmetro `estudanteId` da URL, enviado pelo cliente.
    try{
      // Chama o método `pegaMatriculasPorEstudante` no serviço `PessoaServices`, passando o ID do estudante.
      // Converte `estudanteId` para número para garantir compatibilidade com o banco de dados.
      const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas); // retorna os dados em um json
    }catch(erro){
      // erro
    }
  }

}

module.exports = PessoaController;
