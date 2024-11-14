const { databaseClientePF } = require('../config/databaseCliente');
const { ClientePF } = require('../models/ClientePF') 

class ControllerClientePF {

  adicionarCliente(nome, dataNascimento, telefone, email, cpf) {
    try {
      const novoCliente = new ClientePf(nome, dataNascimento, telefone, email, cpf);
      databaseClientePF.push(novoCliente);
      console.log("Cliente Pessoa Física adicionado com sucesso!");
      return novoCliente;
    } catch (error) {
      console.error("Erro ao adicionar cliente Pessoa Física:", error.message);
    }
  }

  listarClientes() {
    try {
      if (cpf) {
        const cliente = databaseClientePF.find(cli => cli.cpf === cpf);
        if (cliente) {
          console.log("Cliente encontrado! ", cliente);
          return cliente;
        } else {
          console.log("Cliente não encontrado. ");
          return null;
        }
      } else {
        console.table(databaseClientePF);
        return databaseClientePF;
      }
    } catch (error) {
      console.error("Erro ao listar clientes Pessoa Física. ", error.message);
    }
  }


  editarCliente(cpf, novosDados) {
    try {
      const cliente = databaseClientePF.find(cli => cli.cpf === cpf);
      if (cliente) {
        if (novosDados.nome) cliente.nome = novosDados.nome;
        if (novosDados.dataNascimento) cliente.dataNascimento = novosDados.dataNascimento;
        if (novosDados.telefone) cliente.telefone = novosDados.telefone;
        if (novosDados.email) cliente.email = novosDados.email;
        console.log("Cliente atualizado com sucesso!");
        return cliente;
      } else {
        console.log("Cliente não encontrado para atualização.");
        return null;
      }
    } catch (error) {
      console.error("Erro ao editar cliente Pessoa Física:", error.message);
    }
  }

  excluirCliente(cpf) {
    try {
      const index = databaseClientePF.findIndex(cli => cli.cpf === cpf);
      if (index !== -1) {
        databaseClientePF.splice(index, 1);
        console.log("Cliente removido com sucesso!");
        return true;
      } else {
        console.log("Cliente não encontrado para remoção.");
        return false;
      }
    } catch (error) {
      console.error("Erro ao excluir cliente Pessoa Física:", error.message);
    }
  }


  excluirTodosClientes() {
    try {
      databaseClientePF.length = 0;
      console.log("Todos os clientes Pessoa Física foram removidos com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir todos os clientes Pessoa Física:", error.message);
    }
  }
}


module.exports = { ControllerClientePF };