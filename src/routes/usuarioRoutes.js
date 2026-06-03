const express = require('express');
const router = express.Router();

const { 
    listarUsuario
} = require('../controllers/usuariosController');

router.get('/', listarUsuario);

module.exports = router;