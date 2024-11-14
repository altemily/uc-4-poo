const { databaseEstoque } = require('../config/databaseEstoque');
const { Estoque } = require('../models/Estoque'); 

class ControllerEstoque {

  adicionarAoEstoque(produto, quantidade) {
    try {
      const itemExistente = databaseEstoque.find(item => item.produto.numeroDeSerie === produto.numeroDeSerie);

      if (itemExistente) {
        itemExistente.quantidade += quantidade;
        console.log("Quantidade atualizada no estoque!");
      } else {
        const novoItemEstoque = new Estoque(produto, quantidade);
        databaseEstoque.push(novoItemEstoque);
        console.log("Notebook adicionado ao estoque com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao adicionar ao estoque:", error.message);
    }
  }

  listarEstoque() {
    try {
      const estoqueListagem = databaseEstoque.map(item => ({
        numeroDeSerie: item.produto.numeroDeSerie,
        marca: item.produto.marca,
        modelo: item.produto.modelo,
        cor: item.produto.cor,
        preco: item.produto.preco,
        quantidade: item.quantidade
      }));
      console.table(estoqueListagem);
    } catch (error) {
      console.error("Erro ao listar estoque:", error.message);
    }
  }

  atualizarQuantidade(numeroDeSerie, novaQuantidade) {
    try {
      const item = databaseEstoque.find(item => item.produto.numeroDeSerie === numeroDeSerie);

      if (item) {
        item.quantidade = novaQuantidade;
        console.log("Quantidade atualizada com sucesso!");
      } else {
        console.log("Notebook com o número de série especificado não encontrado no estoque.");
      }
    } catch (error) {
      console.error("Erro ao atualizar quantidade no estoque:", error.message);
    }
  }

  removerDoEstoque(numeroDeSerie) {
    try {
      const index = databaseEstoque.findIndex(item => item.produto.numeroDeSerie === numeroDeSerie);

      if (index !== -1) {
        databaseEstoque.splice(index, 1);
        console.log("Notebook removido do estoque com sucesso!");
      } else {
        console.log("Notebook com o número de série especificado não encontrado no estoque.");
      }
    } catch (error) {
      console.error("Erro ao remover do estoque:", error.message);
    }
  }

  limparEstoque() {
    try {
      databaseEstoque.length = 0; 
      console.log("Todo o estoque foi removido com sucesso!");
    } catch (error) {
      console.error("Erro ao limpar o estoque:", error.message);
    }
  }
}

module.exports = { ControllerEstoque };

