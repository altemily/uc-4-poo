const prompt = require('prompt-sync')();
const { Dado } = require('./dado');
const { Jogador } = require('./jogador');
const { SistemaAzar } = require('./sistemaAzar');

const nomeJogador = prompt("Digite o nome do jogador: ");
const apostaJogador = parseInt(prompt("Digite sua aposta (número entre 1 e 6): "), 10);

if (apostaJogador < 1 || apostaJogador > 6) {
  console.log("Aposta inválida! Por favor, digite um número entre 1 e 6.");
} else {
  const jogador = new Jogador(nomeJogador, apostaJogador);
  const sistemaAzar = new SistemaAzar();

  sistemaAzar.setJogador(jogador);
  sistemaAzar.verificarGanhador();
}
