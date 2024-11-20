class Tarefas {
    #descricao;
    #status;

    constructor(descricao, status) {    
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

    set setStatus(status) {
        this.#status = status;
    }

    getInfo() {
        console.log(`Descrição: ${this.getDescricao} | Status: ${this.getStatus}`);
    }

    finalizarTarefa() {
        this.setStatus = "Finalizada.";
    }
}

module.exports = { Tarefas };
