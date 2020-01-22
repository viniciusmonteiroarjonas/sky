# SKY - Backend

Este projeto servirá como `avaliação` do Vinicius Monteiro Arjonas

### Health

Determinando o status de integridade do servidor

```bash
HMG - http://localhost:3000
```

## Tecnologias

- [Node.js] - registrada para o back-end
- [Express] - estrutura rápida de aplicativos de rede node.js.
- [Mongo] - gerenciador de banco de dados para o ambiente de production.

## Intalação do projeto

### Requisitos

- [Nodejs 10.0](https://nodejs.org/en/download/) ou superior

## Rodar projeto em desenvolvimento

Caso você tenha o Mongo configurado na sua máquina, alterar as várias de ambiente e executar os comandos abaixo no bash no diretório principal da aplicação.
```bash
yarn
yarn run dev
```

### Rodar o projeto com uma imagem do docker

Execute os comandos na sequência.

```bash
docker-compose up -d
docker build -t sky-teste .
docker run -p 3000:3000 sky-teste
```
- Após a execução do comandos acima, acessar as urls:
- http://localhost:27017 (Mongo)
- http://localhost:3000 (API)


## Rodar testes
```bash
yarn run test
```

