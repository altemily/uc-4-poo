class SistemaAzar {
    constructor() {
      this.jogador = null;
      this.dado = new Dado();
    }
  
    verificarGanhador() {
      if (this.jogador && this.jogador.getAposta() === this.dado.getFace()) {
        console.log(`Parabéns, ${this.jogador.getNome()}! Você acertou!`);
      } else {
        console.log(`Que pena, ${this.jogador ? this.jogador.getNome() : 'Jogador'}! Você errou sua aposta.`);
      }
    }
  
    getJogador() {
      return this.jogador;
    }
  
    setJogador(jogador) {
      this.jogador = jogador;
    }
  
    getDado() {
      return this.dado;
    }
  
    setDado(dado) {
      this.dado = dado;
    }
  }
  
  

  module.exports = { SistemaAzar };