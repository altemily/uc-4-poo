const { Animal } = require("./Animal");

class Mamifero extends Animal {
    #tipoPelo
    #habitat

    constructor( nome, idade, tipoPelo, habitat){
        super(nome, idade);
        this.#tipoPelo;
        this.#habitat;
        Object.freeze(this);
    }

    get getTipoPelo(){
        return this.#tipoPelo;
    }
    get getHabitat(){
        return this.#tipoPelo
    }
    set setTipoPelo(tipoPelo){
        this.#tipoPelo = tipoPelo
    }
    set setHabitat(habitat){
        this.#habitat = habitat
    }

    emitirSom(){
        console.log(`${this.getNome} O mamífero ruge ou grunhe`);
    }

    getInfo(){
        console.log (`Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo de pelo: ${this.getTipoPelo}, Habitat: ${this.getHabitat}`)
        }
}

module.exports = { Mamifero };