const express = require('express');
const rotas = express.Router();

rotas.get('/super',(req,res)=>{
    res.json({"sucess":true})
})

module.exports = app =>app.use(rotas)