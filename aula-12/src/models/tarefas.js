// class Tarefa {
//     #descricao
//     #status
 
//      constructor(descricao, status = "Não finalizada") {
//          this.#descricao = descricao;  
//          this.#status = status;   
 
//      }
//      get getDescricao(){
//          return this.#descricao
//      }
//      set setDescricao(descricao) {
//          this.#descricao = descricao;
//      }
//      get getStatus(){
//         return this.#status
//      }
 
//      getInfo() {
//          console.log(`Descrição: ${this.getDescricao()} | Status: ${this.getStatus()}`);
//      }
//  }
 
 //  module.exports = { Tarefa }
 
 
 
class Tarefa {
    #descricao;  
    #status;     

    constructor(descricao, status = "Não finalizada") {
        this.#descricao = descricao;  
        this.#status = status;   
    }
    get getDescricao() {
        return this.#descricao;
    }
    set setDescricao(descricao) {
        this.#descricao = descricao;
    }
    get getStatus() {
        return this.#status;
    }
    getInfo() {
        console.log(`Descrição: ${this.getDescricao} | Status: ${this.getStatus}`);
    }
}

module.exports = { Tarefa };

 