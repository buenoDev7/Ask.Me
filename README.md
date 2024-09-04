# Projeto FullStack de Perguntas e Respostas

Este é um projeto de aplicação web de perguntas e respostas, desenvolvido como parte de um curso de desenvolvimento FullStack. O projeto utiliza uma combinação de tecnologias modernas para criar uma aplicação interativa e responsiva. A seguir, você encontrará uma descrição detalhada das tecnologias utilizadas e como configurar o projeto.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de JavaScript do lado do servidor que permite criar aplicações web escaláveis.
- **Express.js**: Framework minimalista para Node.js que facilita o desenvolvimento de aplicações web e APIs.
- **EJS**: Motor de templates para renderização dinâmica de HTML com dados do servidor.
- **Bootstrap 5**: Framework de CSS para criar layouts responsivos e modernos de forma rápida e eficiente.
- **CSS 3**: Linguagem de estilo para estilização avançada da interface do usuário.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional para armazenar e gerenciar dados da aplicação.
- **Sequelize**: ORM para Node.js que simplifica a interação com o banco de dados MySQL.
- **bodyParser**: Middleware para capturar e processar dados de formulários enviados via HTTP.

## Configuração do Projeto

1. **Clonar o Repositório**

   Comece clonando este repositório para o seu ambiente local:

   `git clone https://github.com/buenoDev7/Ask.Me.git`

2. **Instalar Dependências**
    `cd seu-repositorio`
    `npm install`

3. **Configurar Banco de Dados** 
    Antes de iniciar o projeto, é necessário configurar o banco de dados MySQL. Crie um banco de dados e configure as credenciais no arquivo `.env.` O arquivo `.env.example` está disponível como um modelo para ajudar na configuração:

    `DB_HOST=localhost`
    `DB_USER=seu-usuario`
    `DB_PASSWORD=sua-senha`
    `DB_NAME=seu-banco-de-dados`

4. **Executar Migrações**
    Execute as migrações para criar as tabelas necessárias no banco de dados:
    `npx sequelize-cli db:migrate`

5. **iniciar o Servidor**
    `npm start` 

**O servidor estará disponível em `http://localhost:3000.`**

## Funcionalidades
- Criação e Exibição de Perguntas: Os usuários podem criar novas perguntas e visualizar uma lista de perguntas existentes.

- Respostas às Perguntas: Usuários podem responder às perguntas e visualizar as respostas.
- Interface Responsiva: A aplicação utiliza Bootstrap 5 para garantir que o layout seja responsivo e amigável para dispositivos móveis.
- Autenticação de Usuários: Sistema básico de autenticação para gerenciamento de usuários e controle de acesso às funcionalidades.

## Contribuindo

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, por favor, siga as etapas abaixo:

1. **Faça um fork do repositório.**

2. **Crie uma nova branch para sua contribuição:**
   `git checkout -b minha-nova-feature`


3. **Faça as alterações necessárias e adicione commits:**
    `git commit -am 'Adicionando nova feature`

4. **Faça um push para a branch:**
    `git push origin minha-nova-feature`

5. **Crie um Pull Request para revisão.**
