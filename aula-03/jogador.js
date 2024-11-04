class Jogador {
    constructor(nome, aposta) {
      this.nome = nome;
      this.aposta = aposta;
    }
  
    getNome() {
      return this.nome;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  
    getAposta() {
      return this.aposta;
    }
  
    setAposta(aposta) {
      this.aposta = aposta;
    }
  }
  

  module.exports = { Jogador };

