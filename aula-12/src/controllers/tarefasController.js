const { Tarefa } = require('../models/tarefas');
const { TarefasPessoais } = require('../models/tarefasPessoais');
const { TarefasProfissionais } = require('../models/tarefasProfissionais');
const bancoTarefas = [];  

class TarefasController {

    criarTarefa(tipo, descricao, status = "Não finalizada", prioridade = "Média", data = null) {
        let tarefa;

        if (tipo.toLowerCase() === 'tarefa pessoal') {
            tarefa = new TarefasPessoais(descricao, status, prioridade, data);
        } else if (tipo.toLowerCase() === 'tarefa profissional') {
            tarefa = new TarefasProfissionais(descricao, status, prioridade, data);
        } else if (tipo.toLowerCase() === 'tarefa') {
            tarefa = new Tarefa(descricao, status);
        } else {
            console.log('Tipo de Tarefa inválido.');
            return;
        }

        bancoTarefas.push(tarefa);
        console.log('Tarefa adicionada com sucesso!');
    }

    listarTarefas() {
        if (bancoTarefas.length > 0) {
            console.log('==== Tarefas ====');
            bancoTarefas.forEach((tarefa, index) => {
                console.log(`${index + 1}:`);
                tarefa.getInfo();  
            });
        } else {
            console.log('Nenhuma tarefa adicionada!');
        }
    }

    buscarTarefaPorId(indice) {
        if (bancoTarefas.length >= indice) {
            return bancoTarefas[indice - 1];  
        }
        console.log('Tarefa não encontrada!');
        return null;
    }

    
    editarTarefa(indice, novosDados) {
        const tarefa = bancoTarefas[indice - 1]; 
        if (tarefa) {
            if (novosDados.descricao) {
                tarefa.setDescricao = novosDados.descricao;
            }
            if (novosDados.status) {
                tarefa.setStatus = novosDados.status;
            }
            if (novosDados.prioridade) {
                tarefa.setPrioridade = novosDados.prioridade;
            }
            if (novosDados.data) {
                tarefa.setData = novosDados.data;
            }

            console.log('Tarefa atualizada com sucesso. Novos dados:');
            tarefa.getInfo();  
        } else {
            console.log('Tarefa não encontrada!');
        }
    }
}

module.exports = { TarefasController };
