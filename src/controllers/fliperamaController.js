const conexao = require("../db/database");

async function listarFliperamas(req,res){
    const fliperamas = await conexao.query(
        'SELECT * FROM fliperamas'
    );

    try{
        console.log(fliperamas)
        res.status(200).json(fliperamas)
    } catch(err) {
        console.log(err);
        res.status(500).json({
            erro: `Deu ruim aqui chefe quando fui procura os caras, mas nem eu sei o que deu ruim`
        });
    }
};

module.exports = {
    listarFliperamas
};