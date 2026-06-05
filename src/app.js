const express = require('express');
const app = express();

//rotas
const usuarioRoutes = require('./routes/usuarioRoutes')

// não lembro o que faz, acho que permite o uso do json e avisos http ou algo assim
app.use(express.json());
//usa rota
app.use('/usuario',usuarioRoutes)

module.exports = app;