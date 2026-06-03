const express = require('express');
const app = express();

//rotas
const fliperamaRoutes = require('./routes/fliperamaRoutes')

// não lembro o que faz, acho que permite o uso do json e avisos http ou algo assim
app.use(express.json());
//usa rota
app.use('/fliperama',fliperamaRoutes)

module.exports = app;