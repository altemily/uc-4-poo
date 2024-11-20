const { Tarefas } = require('../models/tarefas');
const { TarefasPessoais } = require('../models/tarefasPessoais');
const { TarefasProfissionais } = require('../models/tarefasProfissionais');

const bancoTarefas = [];

class TarefasController {
    Adicionartarefas(tipo, descricao, status, prioridade, data) {
        let tarefa;
        if (tipo.toLowerCase() === 'pessoal') {
            tarefa = new TarefasPessoais(descricao, status, prioridade, data);
        } else if (tipo.toLowerCase() === 'profissional') {
            tarefa = new TarefasProfissionais(descricao, status, prioridade, data);
        } else {
            console.log('Tipo de tarefa inválido.');
            return;
        }

        bancoTarefas.push(tarefa);
        console.log('Tarefa criada com sucesso!');
    }

    Listartarefas() {
        if (bancoTarefas.length > 0) {
            console.log('=== Tarefas Registradas ===');
            bancoTarefas.forEach((tarefa, index) => {
                console.log(`Tarefa ${index + 1}`);
                tarefa.getInfo();
            });
        } else {
            console.log('Nenhuma tarefa registrada.');
        }
    }

    BuscarId(indice) {
        // Corrigindo lógica
        return indice > 0 && indice <= bancoTarefas.length;
    }

    EditarTarefa(indice, novosDados) {
        if (!this.BuscarId(indice)) {
            console.log('Índice inválido.');
            return;
        }

        const tarefa = bancoTarefas[indice - 1];

        if (novosDados.descricao) {
            tarefa.setDescricao = novosDados.descricao;
        }
        if (novosDados.status) {
            tarefa.setStatus = novosDados.status;
        }
        if (novosDados.prioridade && tarefa.setPrioridade) {
            tarefa.setPrioridade = novosDados.prioridade;
        }
        if (novosDados.data && tarefa.setData) {
            tarefa.setData = novosDados.data;
        }

        console.log('Tarefa editada com sucesso!');
    }

    FinalizarTarefa(indice) {
        if (!this.BuscarId(indice)) {
            console.log('Índice inválido.');
            return;
        }

        const tarefa = bancoTarefas[indice - 1];
        tarefa.finalizarTarefa();
        console.log('Tarefa finalizada com sucesso!');
    }

    ExcluirTarefa(indice) {
        if (!this.BuscarId(indice)) {
            console.log('Índice inválido.');
            return;
        }

        bancoTarefas.splice(indice - 1, 1);
        console.log('Tarefa excluída com sucesso!');
    }
}

module.exports = { TarefasController };
