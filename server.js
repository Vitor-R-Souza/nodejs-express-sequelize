const app = require('./src/app.js'); // importando o express como app

const PORT = 3000; // port que o server vai funcionar

app.listen(PORT, () => { // rodando o server
  console.log('servidor escutando!');
});
