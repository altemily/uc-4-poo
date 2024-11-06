class Animal {
    #nome;

    constructor(nome){
        this.#nome = nome;
    }

get getNome(){
    return this.#nome
}
set setNome(nome){
    this.#nome = nome;
    }

 emitirSom(){
        console.log(`${this.getNome} Faz au au!`);
    }

}


module.exports = {Animal}
 