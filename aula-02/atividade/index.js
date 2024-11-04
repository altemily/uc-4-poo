const prompt = require('prompt-sync')();
const { Produto } = require('./produto');
const { Pedido } = require('./pedido');


function adicionarProdutosAoPedido(){
    const pedido = new Pedido();
    while(true){
        const nome = prompt("Digite o nome do produto(ou sair para finalizar).");
        if(nome.toLowerCase() ==='sair') break;
        const preco = parseFloat(prompt("Digite o preço do produto:"))
        if(isNaN(preco) || preco <=0) {
            console.log("Preço inválido. Tente Novamente");
            continue;
        }
        const produto = new Produto(nome, preco);
        pedido.adicionarProduto(produto);
        console.log(`Produto "${produto.getNome}" adicionado com sucesso!`)
    }
    pedido.mostrarPedido();
}

adicionarProdutosAoPedido();




const produto1 = new Produto('Camiseta', 59.90);
const produto2 = new Produto('Calça', 109.90);
const produto3 = new Produto('Tênis', 699.90);

const pedido01 = new Pedido();
pedido01.adicionarProduto(produto1);
pedido01.adicionarProduto(produto3);



pedido01.mostrarPedido();



















