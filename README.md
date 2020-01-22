i# SKY - Backend

Este projeto servirá como `avaliação` do Vinicius Monteiro Arjonas

### Health

Determinando o status de integridade do servidor

```bash
HMG - http://localhost:3000
```

## Tecnologia

- [Node.js] - registrada para o back-end
- [Express] - estrutura rápida de aplicativos de rede node.js.
- [Mongo] - gerenciador de banco de dados para o ambiente de production.

## Intalação do projeto

### Requisitos

- [Nodejs 10.0](https://nodejs.org/en/download/) ou superior

## Rodar projeto em desenvolvimento

Executar os comandos no bash no diretório principal da aplicação.

### Criar e iniciar o container do mongo
```bash
docker-compose up -d
```
- Após a execução do comando acima, acessar a url: http://localhost:27017

```bash
yarn
yarn run dev
```

## Rodar testes
```bash
yarn run test
```

### Testar arquivo Dockerfile

```bash
docker build -t sky-teste .
docker run -p 3000:3000 sky-teste
