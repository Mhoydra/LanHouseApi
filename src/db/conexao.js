const mysql = require('mysql2/promise');

require('dotenv').config();

const conexao = mysql.createPool({
    host: process.env.DT_HOST,
    user: process.env.DT_USER,
    database: process.env.DT_NAME,
    password: process.env.DT_PASSWORD
});

module.exports = conexao;