const prompt = require('prompt-sync')();
const { TarefasController } = require('../controllers/tarefasController');

const controller = new TarefasController();

function iniciarSistema() {
    let opcao;
    do {
        console.log('=== Gerenciamento de Tarefas ===');
        console.log('1 - Adicionar Tarefa: ');
        console.log('2 - Listar Tarefas: ');
        console.log('3 - Editar Tarefa: ');
        console.log('4 - Excluir Tarefa: ');
        console.log('0 - Sair.');
        opcao = prompt('Escolha uma opção (0 a 4): ');

        switch (opcao) {
            case '0':
                console.log('Saindo do sistema...');
                break;
            case '1':
                adicionarTarefa();
                break;
            case '2':
                controller.Listartarefas();
                break;
            case '3':
                editarTarefa();
                break;
            case '4':
                excluirTarefa();
                break;
            default:
                console.log('Opção inválida, tente novamente.');
        }
    } while (opcao !== '0');
}

function adicionarTarefa() {
    const tipo = prompt('Informe o tipo da tarefa (Pessoal ou Profissional): ').toLowerCase();
    if (!['pessoal', 'profissional'].includes(tipo)) {
        console.log('Tipo de tarefa inválido.');
        return;
    }

    const descricao = prompt('Descrição: ');
    const status = prompt('Status (Não Finalizada / Finalizada): ');
    const prioridade = tipo !== 'tarefa' ? prompt('Prioridade: ') : undefined;
    const data = tipo !== 'tarefa' ? prompt('Data: ') : undefined;

    controller.Adicionartarefas(tipo, descricao, status, prioridade, data);
}

function editarTarefa() {
    const indice = parseInt(prompt('Informe a tarefa que deseja editar: '), 10);
    if (isNaN(indice) || indice <= 0) {
        console.log('Índice inválido. Tente novamente.');
        return;
    }

    const novosDados = {};
    novosDados.descricao = prompt('Descrição (pressione "Enter" para manter a atual): ');
    novosDados.status = prompt('Status ( pressione "Enter" para manter o atual): ');
    novosDados.prioridade = prompt('Prioridade (pressione "Enter" para manter a atual): ');
    novosDados.data = prompt('Data (pressione "Enter" para manter a atual): ');

    controller.EditarTarefa(indice, novosDados);
}


function excluirTarefa() {
    const indice = parseInt(prompt('Qual tarefa que deseja excluir? '), 10);
    if (isNaN(indice) || indice <= 0) {
        console.log('Índice inválido. Tente novamente.');
        return;
    }

    controller.ExcluirTarefa(indice);
}

iniciarSistema();
