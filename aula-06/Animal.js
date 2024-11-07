class Animal {
    #nome;
    #idade;

    constructor (nome, idade) { 
    this.#nome = nome;
    this.#idade = idade;

    Object.freeze(this);
    }

    get getNome(){
        return this.#nome;
    }
    get getIdade(){
        return this.#idade
    }
    set setNome(nome){
        this.#nome = nome;
    }
    set setIdade(idade){
        this.#idade = idade;
    }

    emitirSom(){
        console.log(`${this.getNome} O animal emite um som genérico.`);
    }

    getInfo(){
    console.log (`Nome: ${this.getNome}, Idade: ${this.getIdade}`)
    }

}

module.exports = {Animal}