const { databaseClientePJ } = require('../config/databaseCliente');
const { ClientePJ } = require('../models/ClientePJ');

class ControllerClientePJ {

  adicionarCliente(nome, dataNascimento, telefone, email, cnpj) {
    try {
      const novoCliente = new ClientePj(nome, dataNascimento, telefone, email, cnpj);
      databaseClientePJ.push(novoCliente);
      console.log("Cliente Pessoa Jurídica adicionado com sucesso!");
      return novoCliente;
    } catch (error) {
      console.error("Erro ao adicionar cliente Pessoa Jurídica:", error.message);
    }
  }

  listarClientes(cnpj = null) {
    try {
      if (cnpj) {
        const cliente = databaseClientePJ.find(cli => cli.cnpj === cnpj);
        if (cliente) {
          console.log("Cliente encontrado:");
          console.table([{
            nome: cliente.nome,
            dataNascimento: cliente.dataNascimento,
            telefone: cliente.telefone,
            email: cliente.email,
            cnpj: cliente.cnpj
          }]);
        } else {
          console.log("Cliente com o CNPJ especificado não encontrado.");
        }
      } else {
        const clientesListados = databaseClientePJ.map(cliente => ({
          nome: cliente.nome,
          dataNascimento: cliente.dataNascimento,
          telefone: cliente.telefone,
          email: cliente.email,
          cnpj: cliente.cnpj
        }));
        console.table(clientesListados);
      }
    } catch (error) {
      console.error("Erro ao listar clientes Pessoa Jurídica:", error.message);
    }
  }

  editarCliente(cnpj, novosDados) {
    try {
      const cliente = databaseClientePJ.find(cli => cli.cnpj === cnpj);
      if (cliente) {
        if (novosDados.nome) cliente.nome = novosDados.nome;
        if (novosDados.dataNascimento) cliente.dataNascimento = novosDados.dataNascimento;
        if (novosDados.telefone) cliente.telefone = novosDados.telefone;
        if (novosDados.email) cliente.email = novosDados.email;
        console.log("Cliente atualizado com sucesso!");
      } else {
        console.log("Cliente com o CNPJ especificado não encontrado para atualização.");
      }
    } catch (error) {
      console.error("Erro ao editar cliente Pessoa Jurídica:", error.message);
    }
  }

  excluirCliente(cnpj) {
    try {
      const index = databaseClientePJ.findIndex(cli => cli.cnpj === cnpj);
      if (index !== -1) {
        databaseClientePJ.splice(index, 1);
        console.log("Cliente removido com sucesso!");
      } else {
        console.log("Cliente com o CNPJ especificado não encontrado para remoção.");
      }
    } catch (error) {
      console.error("Erro ao excluir cliente Pessoa Jurídica:", error.message);
    }
  }

  
  excluirTodosClientes() {
    try {
      databaseClientePJ.length = 0; 
      console.log("Todos os clientes Pessoa Jurídica foram removidos com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir todos os clientes Pessoa Jurídica:", error.message);
    }
  }
}


module.exports = { ControllerClientePJ };
