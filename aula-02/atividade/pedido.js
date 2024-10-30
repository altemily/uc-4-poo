const { Produto } = require("./produto");


class Pedido {
  #produtos = [];

    constructor(){
        this.#produtos = [];
    }
    adicionarProduto(produto){
        if(produto instanceof Produto){
            this.#produtos.push(produto)
        }else{
            console.log('Somente objetos do tipo Produto podem ser adiconados!')
        }
    }
    mostrarPedido(){
        console.log('Resumo do Pedido: ')
        this.#produtos.forEach(produto =>{
            console.log(produto.getInfoProduto());
        })
    }
}







module.exports = { Pedido };

