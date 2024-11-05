const prompt = require('prompt-sync')();
const {Dado} = require('./Dado');
const {Jogador} = require('./Jogador');
const {SistemaAzar} = require('./SistemaAzar');


function executar(){
    let novoTurno = '';
    console.log('Bem-vindo ao Sistema Azar 1.0');
    do{
        const nome = prompt("Qual o nome do jogador: ");
        const aposta = prompt("Digite um valor de 1 a 6: ")
        const lance = new Dado();
        const jogador01 = new Jogador(nome, aposta);
        const tigrinho = new SistemaAzar(lance, jogador01);
        tigrinho.verificarGanhador();
        novoTurno = prompt("Digite S para uma nova aposta ou N para sair: ")
    }while(novoTurno !== 'N');
    console.log("Até logo!")
}

executar();


const lance = new Dado();
const jogador01 = new Jogador('Jorel', 2);

let aposta = 5;
const tigrinho = new SistemaAzar(lance, jogador01);

//tigrinho.getJogador.apresentarDados()
tigrinho.verificarGanhador()

