
# Node.JS com express e sequelize

Projeto criado durante o curso da alura de API usando node.js e sequelize, da formação de APIs com Node.js e Express.\
O projeto demonstra a construção de uma API RESTful utilizando Node.js, Express e Sequelize para interagir com um banco de dados relacional. O Sequelize é um ORM (Object-Relational Mapper) para Node.js que suporta diversos bancos de dados, incluindo PostgreSQL, MySQL, MariaDB, SQLite e SQL Server.\
Parte do codigo foi comentado, com explicações breves sobre como funcionam.


## Tecnologias usadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Sqlite](https://www.sqlite.org/index.html)
- [Nodemon](https://nodemon.io)

## Funcionalidades

- Configuração de um servidor Express.
- Integração com o banco de dados usando Sequelize.
- Criação de modelos e migrações para gerenciamento de tabelas.
- Implementação de operações CRUD (Create, Read, Update, Delete).


## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Vitor-R-Souza/nodejs-express-sequelize.git
   cd nodejs-express-sequelize
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```
3. Configure o banco de dados:

   - Certifique-se de ter um banco de dados relacional instalado e em execução.
   - Atualize as configurações de banco de dados no arquivo `config/config.json` conforme necessário.

4. Execute as migrações para criar as tabelas no banco de dados:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. Inicie o servidor com o nodemon:

   ```bash
   npm run dev
   ```

   O servidor estará disponível em `http://localhost:3000`.
## Uso/Exemplos

Após iniciar o servidor, você pode interagir com a API utilizando ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/). As rotas disponíveis incluem:

- `GET /pessoas` - Retorna uma lista de pessoas.
- `GET /pessoas/:id` - Retorna uma pessoa específica pelo ID.
- `POST /pessoas` - Cria uma nova pessoa.
- `PUT /pessoas/:id` - Atualiza uma pessoa existente pelo ID.
- `DELETE /pessoas/:id` - Exclui uma pessoa pelo ID.
Existe tambem outras rotas que podem ser vistas na pasta `src/routes`.

