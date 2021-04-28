# Serverless Employee

Serverless Employee é um API de CRUD de funcionários utilizando Serverless, Typescript e Jest.

# Começando

Para executar localmente execute os seguintes passos:
obs: Lembre de atualizar a URI do mongo que está em config/.env-dev

```
git clone https://github.com/ezequiassam/serverless-employee.git
cd serverless-employee
npm install
npm run test
npm run local
```

# Deploy

Você pode executar o deploy da aplicação executando o comando:

```
npm run deploy
```

# Endpoints

Como solicitado as funcões estão disponiveis online através dos endpoints:

```
POST - https://215fba5o8e.execute-api.us-east-1.amazonaws.com/dev/employee
PUT - https://215fba5o8e.execute-api.us-east-1.amazonaws.com/dev/employee/{id}
GET - https://215fba5o8e.execute-api.us-east-1.amazonaws.com/dev/employee
GET - https://215fba5o8e.execute-api.us-east-1.amazonaws.com/dev/employee/{id}
DELETE - https://215fba5o8e.execute-api.us-east-1.amazonaws.com/dev/employee/{id}
```

# Documentação da API
Você pode consultar a documentação [aqui](API.md)

