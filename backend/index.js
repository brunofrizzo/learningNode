const express = require('express');
const app = express();

app.use(express.json());

app.post('/users/', (request, response) => {
    const params = request.body;

    console.log(params);

    return response.json({
        evento: "semana omni stack",
        aluno: "bruno frizzo"
    })
});

app.listen(3333);