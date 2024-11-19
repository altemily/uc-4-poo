const prompt = require('prompt-sync')();
const { Tarefa } = require('../models/tarefas');  
const { TarefasPessoais } = require('../models/tarefasPessoais')

const controller = new TarefaController();

function iniciarSistema(){
    let opcao;
    do{
        console.log('=== Sistema de Gerenciamento de Tarefas ===');
        console.log('1. Adicionar Tarefas');
        console.log('2. Listar Tarefas');
        console.log('3. Editar');
        console.log('4. Excluir Tarefas');
        console.log('0. Sair');
        opcao = prompt('Escolha uma opção (0 a 4): ');
        switch(opcao){
            case '0':
                console.log('Saindo do Sistema...');
                break;
            case '1':
                adicionarTarefas();
                break;
            case '2':
                controller.listarTarefas();
                break;
            case '3':
                editarTarefa();
                break;
            case '4':
                excluirTarefa();
                break;
            default:
                console.log('Opção Inválida');
        }
        
    }while(opcao!=='3');
}


function adicionarTarefas(){
    const tipo = prompt('Digite o tipo de Tarefa (Tarefa Pessoal / Tarefa Profissional / Tarefa): ');
    const descricao = prompt('Digite a tarefa: ');
    const status = prompt('Digite o status da tarefa: ');
    const prioridade = prompt('Digite o nível de prioridade da tarefa: ');
    const data = prompt('Digite a data da tarefa: ')
    controller.criarTarefa(tipo, descricao, status, prioridade, data);
}

function editarTarefa(){
    const indice = parseInt(prompt('Digite o indice que que você deseja editar: '))
    const result = controller.buscarId(indice);
    if(result){
        console.log('Informe os novos dados (pressione enter para manter a tarefa atual): ')
        const descricao = prompt('Achei!');
        const status = parseInt(prompt('Novo ano: '));
        const prioridade = prompt('Novo modelo: ');
        const data = prompt('Nova cor: ');
        const novosDados = {};
        if(descricao) novosDados.descricao = descricao;
        if(status) novosDados.status = status;
        if(prioridade) novosDados.prioridade = prioridade;
        if(data) novosDados.data = data;
        controller.editarVeiculo(indice, novosDados);
    }else{
        console.log('Informe um índice válido!')
    }
}





iniciarSistema(); 