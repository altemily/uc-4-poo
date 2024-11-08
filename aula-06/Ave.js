const { Animal } = require("./Animal");

class Ave extends Animal{
    #tipoBico;
    #capacidadeVoo;


    constructor(nome, idade, tipoBico, capacidadeVoo){
        super(nome, idade);
        this.#tipoBico = tipoBico;
        this.#capacidadeVoo = capacidadeVoo
        Object.freeze(this);
    }

    get getTipoBico(){
        return this.#tipoBico
    }
    get getCapacidadeVoo(){
        return this.#capacidadeVoo
    }
    set setTipoBico(tipoBico){
        this.#tipoBico = tipoBico
    }
    set setCapacidadeVoo(capacidadeVoo){
        this.#capacidadeVoo = capacidadeVoo
    }

    emitirSom(){
        console.log(`${this.getNome} A ave canta ou pia.`);
    }

    getInfo(){
        console.log (`Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo de bico: ${this.getTipoBico}, Capacidade de Voo: ${this.getCapacidadeVoo}`)
        }
}

module.exports = { Ave };
