const express = require('express');
const router = express.Router();

const { 
    listarFliperamas 
} = require('../controllers/fliperamaController');

router.get('/', listarFliperamas);

module.exports = router;