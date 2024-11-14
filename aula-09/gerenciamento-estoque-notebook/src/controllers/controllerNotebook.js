const { databaseNotebook } = require('../config/databaseNotebook')
const { Notebook} = require('../models/Notebook');

class ControllerNotebook {
  
    adicionarNotebook(numeroDeSerie, marca, modelo, cor, preco) {
      try {
        const novoNotebook = new Notebook(numeroDeSerie, marca, modelo, cor, preco);
        databaseNotebook.push(novoNotebook);
        console.log("Notebook adicionado com sucesso!");
        return novoNotebook

      } catch (error) {
        console.error("Erro ao adicionar notebook. ", error.message);
      }
    }
  
    listarNotebooks() {
        try {
            const notebooks = databaseNotebook.map(notebook => ({
                numeroDeSerie: notebook.getNumeroSerie,
                marca: notebook.marca,
                modelo: notebook.modelo,
                cor: notebook.cor,
                preco: notebook.getPreco
            }))
            console.table(notebooks);
        } catch (error) {
        console.error("Erro ao listar notebooks.", error.message);
      }
    }
  

    editarNotebook(numeroDeSerie) {
      try {
        const notebook = this.notebooks.find(nb => nb.getNumeroSerie() === numeroDeSerie);
        if (notebook) {
          if (novosDados.marca) notebook.marca = novosDados.marca;
          if (novosDados.modelo) notebook.modelo = novosDados.modelo;
          if (novosDados.cor) notebook.cor = novosDados.cor;
          if (novosDados.preco) notebook.setPreco(novosDados.preco);
          console.log("Notebook atualizado com sucesso!");
          return notebook;
        } else {
          console.log("Notebook não encontrado para atualização.");
          return null;
        }
      } catch (error) {
        console.error("Erro ao editar notebook:", error.message);
      }
    }
  
    excluirNotebook(numeroDeSerie) {
      try {
        const index = this.notebooks.findIndex(nb => nb.getNumeroSerie() === numeroDeSerie);
        if (index !== -1) {
          this.notebooks.splice(index, 1);
          console.log("Notebook removido com sucesso!");
          return true;
        } else {
          console.log("Notebook não encontrado para remoção.");
          return false;
        }
      } catch (error) {
        console.error("Erro ao excluir notebook:", error.message);
      }
    }
  
    excluirTodosNotebooks() {
      try {
        this.notebooks = [];
        console.log("Todos os notebooks foram removidos com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir todos os notebooks:", error.message);
      }
    }
  }
  
  
  
  
  
  
  
 module.exports = { ControllerNotebook };
  
 
  
