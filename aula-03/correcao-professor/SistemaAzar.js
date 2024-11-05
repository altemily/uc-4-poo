const { Dado } = require('./Dado');
const { Jogador } = require('./Jogador');

class SistemaAzar{
    #dado;
    #jogador;

    constructor(dado, jogador){
        if(dado instanceof Dado && jogador instanceof Jogador){
            this.#dado = dado;
            this.#jogador = jogador;
        }else{
            console.log('Os dados fornecidos não são do Tipo Jogador ou Dado. ')
        }

        Object.freeze(this);

    }
    get getDados(){
        return this.#dado;
    }
    set setDado(dado){
        this.#dado = dado;
    }
    get getJogador(){
        return this.#jogador;
    }
    set setJogador(jogador){
        this.#jogador = jogador;
    }
    verificarGanhador(){
        if(this.#dado.getFace === this.#jogador.getAposta){
            console.log(`Parabéns! Você ganhou! Resultado so SistemaAzar: ${this.#dado.getFace}`);
            this.#jogador.apresentarDados();
        }else{
            console.log(`Que pena! Aposte novamente. Resultado do SistemaAzar: ${this.#dado.getFace}`);
            this.#jogador.apresentarDados();
        }
    }
    
}


module.exports = {SistemaAzar}

