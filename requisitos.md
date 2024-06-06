# Desafio Ecommerce

## Primeira Entrega - Objetivo

### Montar a estrutura inicial do projeto e criação de um componente visual simples

Requisitos:

- [x] Criar o projeto utilizando (NextJS, CRA ou ViteJS), utilizar Typescript (Obrigatório);
- [x] Card com as informações do produto (nome, descrição, imagem e preço);
- [x] Header com título do site e um campo de busca (ainda sem ação);
- [x] Menu lateral com lista de categorias (ainda sem ação);
- [x] Aplicação disponível na WEB (Deploy pela vercel ou netlify);
- [x] Bônus: Responsividade.

## Segunda Entrega - Objetivo

### Adicionar estado na aplicação e familiarização com hooks básicos

Requisitos:

- [x] A lista de produtos deve vir de um arquivo json (mockado) e ficar armazenado no estado da aplicação;
- [ ] O campo de busca do header deve filtrar os produtos com base no nome;
- [x] Cada produto deve pertencer a uma ou mais categorias;
- [x] O menu lateral deve filtrar os produtos por categoria;
- [x] Bônus: Consumir a lista de produtos de um serviço REST. Sugestão: [https://mockapi.io](https://mockapi.io).

## Terceira Entrega - Objetivo

### Introdução a API de Contexto e Roteamento

Requisitos:

- [x] Deve ser criado um contexto que armazena as informações do carrinho de compras (itens selecionados);
- [x] No card do produto deve ser adicionado um botão que o adiciona ao carrinho de compras;
- [x] No header deve ser adicionado um link para a página do carrinho;
- [x] Ao acessar a rota do carrinho, a lista de produtos selecionados deve ser exibida;
- [x] Deve ser possível remover um produto do carrinho;
- [x] Bônus: Adicionar informações sobre estoque dos produtos.

## Quarta Entrega - Objetivo

### Finalizar Projeto

Requisitos:

- [x] Na tela do carrinho, apresentar a possibilidade de adicionar mais itens do mesmo produto;
- [x] Apresentar um valor total da compra;
- [x] Adicionar um botão de finalizar compra que exibe uma mensagem de sucesso, zera o carrinho e redireciona o
usuário de volta para página inicial;
- [ ] Bônus: Adicionar informações sobre saldo do cliente;
- [ ] Bônus: Adicionar opção de selecionar cupom para a compra;
- [x] Bônus: Persistir o contexto no sessionStorage;
- [x] Bônus: Criar página de detalhes sobre o produto;
- [ ] Bônus: Adicionar os produtos até uma certa quantidade de acordo com o estoque de cada produto.
