const { Produto } = require('./produto');
const { Pedido } = require('./pedido');


const produto1 = new Produto('Camiseta', 59.90);
const produto2 = new Produto('Calça', 109.90);
const produto3 = new Produto('Tênis', 699.90);

const pedido01 = new Pedido();
pedido01.adicionarProduto(produto1);
pedido01.adicionarProduto(produto3);



pedido01.mostrarPedido();



















