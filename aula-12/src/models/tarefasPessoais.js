const { Tarefa } = require('./tarefas');


class TarefasPessoais extends Tarefa {
#prioridade;
#data;

    constructor(descricao, status, prioridade, data) {
        super(descricao, status); 
        this.#prioridade = prioridade;  
        this.#data = data;              
    }

    set setPrioridade(prioridade) {
        const prioridadesValidas = ["Baixa", "Média", "Alta"];
        if (prioridadesValidas.includes(prioridade)) {
            this.#prioridade = prioridade;
        } else {
            console.log("Prioridade inválida!");
        }
    }
    get getPrioridade() {
        return this.#prioridade;
    }
    set setData(data) {
        this.#data = data;
    }
    get getData() {
        return this.#data;
    }
    getInfo() {
        return `Descrição: ${this.getDescricao()} | Status: ${this.getStatus()} | Prioridade: ${this.getPrioridade()} | Data: ${this.getData()}`;
    }
}

module.exports = { TarefasPessoais }
