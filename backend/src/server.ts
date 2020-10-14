import express, { response } from 'express';

const app = express();

//Rota = conjunto
//Recurso = usuario

//Métodos HTTP = GET, POST, PUT, DELETE
//Parametros

// GET = buscando uma informação (lista, item etc) e consegue acessar pelo navegador
// POST = Criando uma informação
// PUT = editando uma informação
// DELETE = deletar uma informação


app.get('/users', (request, response) => {
    return response.json({message: 'Hello World'});
});

app.listen(3333);