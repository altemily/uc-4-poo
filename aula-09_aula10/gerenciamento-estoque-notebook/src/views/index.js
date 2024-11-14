// Importação dos controladores
const ControllerNotebook = require('../controllers/controllerNotebook');
const ControllerClientePF = require('../controllers/controllerClientePF');
const ControllerClientePJ = require('../controllers/controllerClientePJ');
const ControllerEstoque = require('../controllers/controllerEstoque');

// Inicialização dos controladores
const controllerNotebook = new ControllerNotebook();
const controllerClientePF = new ControllerClientePF();
const controllerClientePJ = new ControllerClientePJ();
const controllerEstoque = new ControllerEstoque();

// Exemplos de uso dos métodos de cada controlador

// === Exemplo de uso do ControllerNotebook ===
console.log("=== CRUD de Notebooks ===");

// Adicionando notebooks
const notebook1 = controllerNotebook.adicionarNotebook();
const notebook2 = controllerNotebook.adicionarNotebook();

// Listando notebooks
controllerNotebook.listarNotebooks();

// Editando notebook
controllerNotebook.editarNotebook();

// Excluindo um notebook
controllerNotebook.excluirNotebook();

// Excluindo todos os notebooks
controllerNotebook.excluirTodosNotebooks();


// === Exemplo de uso do ControllerClientePF ===
console.log("=== CRUD de Clientes PF ===");

// Adicionando clientes PF
const clientePF1 = controllerClientePF.adicionarCliente();
const clientePF2 = controllerClientePF.adicionarCliente();

// Listando clientes PF
controllerClientePF.listarClientes();

// Editando cliente PF
controllerClientePF.editarCliente();

// Excluindo um cliente PF
controllerClientePF.excluirCliente();

// Excluindo todos os clientes PF
controllerClientePF.excluirTodosClientes();


// === Exemplo de uso do ControllerClientePJ ===
console.log("=== CRUD de Clientes PJ ===");

// Adicionando clientes PJ
const clientePJ1 = controllerClientePJ.adicionarCliente();
const clientePJ2 = controllerClientePJ.adicionarCliente();

// Listando clientes PJ
controllerClientePJ.listarClientes();

// Editando cliente PJ
controllerClientePJ.editarCliente();

// Excluindo um cliente PJ
controllerClientePJ.excluirCliente();

// Excluindo todos os clientes PJ
controllerClientePJ.excluirTodosClientes();


// === Exemplo de uso do ControllerEstoque ===
console.log("=== CRUD do Estoque ===");

// Adicionando notebooks ao estoque
controllerEstoque.adicionarAoEstoque();
controllerEstoque.adicionarAoEstoque();

// Listando o estoque
controllerEstoque.listarEstoque();

// Atualizando a quantidade de um notebook no estoque
controllerEstoque.atualizarQuantidade();

// Removendo um notebook do estoque
controllerEstoque.removerDoEstoque();

// Limpando o estoque
controllerEstoque.limparEstoque();
