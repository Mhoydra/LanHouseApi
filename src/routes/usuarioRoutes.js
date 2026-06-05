const express = require('express');
const router = express.Router();

const { 
    listarUsuarioEmail,
    listarUsuarioId 
} = require('../controllers/usuarioController');

router.get('/', listarUsuarioEmail);
router.get('/:idUsuario', listarUsuarioId);

module.exports = router;