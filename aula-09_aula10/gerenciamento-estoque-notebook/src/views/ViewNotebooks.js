const {ControllerNotebook} = require('../controllers/controllerNotebook');


// Instanciando o controller notebooks

const notebookController = new ControllerNotebook();

// Testeando o CRUD para Notebook

// 1- Criando notebooks

console.log("=== Criando Notebooks ==");
notebookController.adicionarNotebook('123ABC', 'Dell', 'Inspirion', 'Prata', 4000.00)
notebookController.adicionarNotebook('456DEF', 'Macbook', 'Air', 'MidNigth', 8000.00)

// 2- Listando os notebooks

console.log("=== Listando Notebooks ===");
notebookController.listarNotebooks();

// 3- Buscando um notebook pelo número de série

console.log("=== Buscando um notebook pelo número de série ===");
notebookController.buscarNotebook('123ABC');

// 4- Atualizando um notebook

console.log("=== Atualizando um notebook ===");
notebookController.adicionarNotebook('123ABC', 'Dell', 'XPS', 'Branco', 4000.00 );

// 5- Removendo um notebook

console.log("=== Removendo um notebook  ===");
notebookController.excluirNotebook('456ABC');