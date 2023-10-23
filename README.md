# Rocketfoods

### Projeto que simula um restaurante, desenvolvido para o desafio final do Explorer da Rocketseat

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://react.dev/)
- [Styled-Components](https://styled-components.com/)

## Layout

É possível visualizar o layout do projeto através [desse link](<https://www.figma.com/file/Tjf7jIrEcC8QdfYn2MQp4Y/food-explorer-v2-(Community)?type=design&node-id=5-983&mode=design&t=VxSIItiilwerglU6-0>). É necessário possuir uma conta no Figma.

## Instalação

1. git clone https://github.com/RickyHideyukiTakakura/rocketfoods-frontend
2. cd rocketfoods-frontend
3. npm install ou yarn install

## Uso do Projeto

Este é um site de um simulador de restaurante onde um administrador pode criar, editar e remover um prato, e o cliente pode fazer a busca por um prato ou ingrediente e visualizá-los com mais detalhes. A seguir, você encontrá mais instruções sobre como usar as principais funcionalidades:

### 1. Rodar o site na maquina local ou pelo link

#### Abrir o site pelo link:

[rocketfoods](https://rocketfoods-frontend.vercel.app/)

#### Para rodar na maquina local:

1. cd rocketfoods-frontend
2. npm run dev
3. acessar o http://localhost:5173/

### 2. Sign In

A fim de teste, é possível logar como:

#### 1. Administrador:

- email: admin@email.com
- senha: 123

#### 2. Cliente:

- email: cliente@email.com
- senha: 123

### 3. Sign Up

É possível criar uma conta, para isso é necessário um nome, email e senha. Por padrão, o usuário criado será um cliente.

### 4. Home e Details

Na Home é possível visualizar todos os pratos cadastrados, pesquisar por algum prato ou ingrediente. Ao clicar em algum prato, é possível visualizá-lo com mais detalhes. Caso o usuário logado seja um administrador, é possível editar o informações do prato.

### 5. Criação e Edição de pratos

Ambas funcionalidades são bem semelhantes e só podem ser acessadas por um administrador. Para criação de um prato, é necessário informar a imagem, nome, categoria, ingredientes, preço e descrição. Na edição, o usuário poderá alterar apenas o que ele desejar, sendo necessário informar novamente apenas os ingredientes.
