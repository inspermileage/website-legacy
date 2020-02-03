# Website

Este repositório contém o código do website do projeto, que foi desenvolvido utilizando o framework [GatsbyJS](https://www.gatsbyjs.org/) e [Bulma](https://bulma.io/). O site está hospedado no [Netlify](https://www.netlify.com/) e pode ser acessado por: https://inspermileage.netlify.com/

## Desenvolvimento

Essas instruções vão fazer com que você tenha uma cópia do projeto rodando em sua máquina local para desevolvimento.
Veja o tópico de [_deployment_](#deployment) para ver como hospedar o projeto.

### Pré-Requisitos

Para executar o projeto, você precisa ter instalado em sua máquina: NodeJS, Yarn e Gatsby CLI. Que podem ser instaladas pelos métodos a seguir:

#### NodeJS (v12.x.x)

- Ubuntu

  ```bash
  $ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
  $ sudo apt-get install -y nodejs
  ```

- Windows
  ```
  https://nodejs.org/dist/v12.13.1/node-v12.13.1-x86.msi
  ```

#### Yarn (v1.16.0)

- Ubuntu

  ```bash
  $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  $ sudo apt-get update && sudo apt-get install yarn
  ```

- Windows
  ```
  https://yarnpkg.com/latest.msi
  ```

#### Gatsby CLI (v1.16.0)

- NPM
  ```bash
  $ npm install -g gatsby-cli
  ```
  ou
- Yarn
  ```bash
  $ yarn global add gatsby-cli
  ```

### Instalação e execução

- Na pasta do projeto, execute o comando `$ yarn install`, ele instalará todas as dependências do projeto descritas no `package.json`.
- Com o comando `gatsby develop` o framework inicia o servidor de desenvolvimento com _hot-reload_
- O site pode ser acessado em `localhost:8000`

## Deployment

Para realizar o deploy do site em no [Netlify](https://www.netlify.com/) é preciso criar uma conta, fornecer acesso da plataforma ao seu Github e selecionar o respositório do site.

Na seção _Build & Deploy_ insira:

- Build command: `gatsby build`
- Publish directory: `public/`

Pronto!

## Contribuindo

Por favor leia [CONTRIBUTING](https://gist.github.com/PurpleBooth/b24679402957c63ec426) para mais detalhes sobre o nosso código de conduta e processo para submeter um _Pull Request_.

## Licença

Esse projeto está licenciado sobre a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
