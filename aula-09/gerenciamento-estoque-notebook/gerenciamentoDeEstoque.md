# Gerenciamento de Notebooks

Este projeto é uma aplicação de gerenciamento de notebooks desenvolvida em JavaScript, aplicando conceitos de Programação Orientada a Objetos (POO) e utilizando uma estrutura de CRUD (Create, Read, Update, Delete) para manipulação de dados. A aplicação permite adicionar, listar, editar e excluir notebooks, além de possibilitar a remoção de todos os itens.

## Funcionalidades

- **Adicionar Notebook**: Permite criar e adicionar um novo notebook ao sistema, especificando número de série, marca, modelo, cor e preço.
- **Listar Notebooks**: Exibe todos os notebooks cadastrados ou busca um notebook específico pelo número de série.
- **Editar Notebook**: Altera os dados de um notebook já existente, permitindo atualizar informações como preço e cor.
- **Excluir Notebook**: Remove um notebook específico do sistema com base no número de série.
- **Excluir Todos os Notebooks**: Remove todos os notebooks cadastrados no sistema.

## Estrutura do Projeto

O projeto consiste em duas classes principais:

- `Notebook`: Representa um notebook, com atributos como `numeroDeSerie`, `marca`, `modelo`, `cor` e `preco`. Contém métodos `get` e `set` para acessar e modificar esses atributos.
- `ControllerNotebook`: Controla as operações de CRUD no sistema. Possui métodos para adicionar, listar, editar, excluir notebooks individualmente e excluir todos os notebooks.


