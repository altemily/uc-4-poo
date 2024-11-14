class Notebook {

    #numeroDeSerie;
    #preco;


    constructor(numeroDeSerie, marca, modelo, cor, preco) {
      this.#numeroDeSerie = numeroDeSerie;
      this.marca = marca;
      this.modelo = modelo;
      this.cor = cor;
      this.#preco = preco;
    }
  
    get getNumeroDeSerie() {
      return this.#numeroDeSerie;
    }
  
    set setNumeroSerie(NovoNumeroDeSerie) {
      this.#numeroDeSerie = NovoNumeroDeSerie;
    }
  
    get getPreco() {
      return this.#preco;
    }
  
    set setPreco(preco) {
      this.#preco = preco;
    }
  }
  

  module.exports = { Notebook };