const express = require('express');
const app = express();
require('./rotas/rotas')(app)
const porta=1303;

app.listen(porta,()=>{
    console.log("Servidor back-end rodando")
})