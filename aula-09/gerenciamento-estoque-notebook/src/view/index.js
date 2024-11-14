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
const notebook1 = controllerNotebook.adicionarNotebook("123ABC", "Dell", "Inspiron", "Preto", 3500);
const notebook2 = controllerNotebook.adicionarNotebook("456DEF", "HP", "Pavilion", "Prata", 4000);

// Listando notebooks
controllerNotebook.listarNotebooks();

// Editando notebook
controllerNotebook.editarNotebook("123ABC", { marca: "Lenovo", preco: 3800 });

// Excluindo um notebook
controllerNotebook.excluirNotebook("456DEF");

// Excluindo todos os notebooks
controllerNotebook.excluirTodosNotebooks();


// === Exemplo de uso do ControllerClientePF ===
console.log("\n=== CRUD de Clientes PF ===");

// Adicionando clientes PF
const clientePF1 = controllerClientePF.adicionarCliente("João Silva", "1990-01-01", "1111-1111", "joao@example.com", "123.456.789-10");
const clientePF2 = controllerClientePF.adicionarCliente("Maria Souza", "1985-05-05", "2222-2222", "maria@example.com", "109.876.543-21");

// Listando clientes PF
controllerClientePF.listarClientes();

// Editando cliente PF
controllerClientePF.editarCliente("123.456.789-10", { telefone: "3333-3333" });

// Excluindo um cliente PF
controllerClientePF.excluirCliente("109.876.543-21");

// Excluindo todos os clientes PF
controllerClientePF.excluirTodosClientes();


// === Exemplo de uso do ControllerClientePJ ===
console.log("\n=== CRUD de Clientes PJ ===");

// Adicionando clientes PJ
const clientePJ1 = controllerClientePJ.adicionarCliente("Empresa X", "2000-06-15", "3333-3333", "contato@empresax.com", "12.345.678/0001-90");
const clientePJ2 = controllerClientePJ.adicionarCliente("Empresa Y", "2010-12-10", "4444-4444", "contato@empresay.com", "98.765.432/0001-09");

// Listando clientes PJ
controllerClientePJ.listarClientes();

// Editando cliente PJ
controllerClientePJ.editarCliente("12.345.678/0001-90", { telefone: "5555-5555" });

// Excluindo um cliente PJ
controllerClientePJ.excluirCliente("98.765.432/0001-09");

// Excluindo todos os clientes PJ
controllerClientePJ.excluirTodosClientes();


// === Exemplo de uso do ControllerEstoque ===
console.log("\n=== CRUD do Estoque ===");

// Adicionando notebooks ao estoque
controllerEstoque.adicionarAoEstoque(notebook1, 10);
controllerEstoque.adicionarAoEstoque(notebook2, 5);

// Listando o estoque
controllerEstoque.listarEstoque();

// Atualizando a quantidade de um notebook no estoque
controllerEstoque.atualizarQuantidade("123ABC", 15);

// Removendo um notebook do estoque
controllerEstoque.removerDoEstoque("456DEF");

// Limpando o estoque
controllerEstoque.limparEstoque();
