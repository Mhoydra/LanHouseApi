const conexao = require("../db/conexao");

// mysql insjection
async function listarUsuarioEmail(req,res){
    
    const usuario = await conexao.query(
        'SELECT * FROM usuarios WHERE emailUsuario'
    );

    try{
        console.log(usuario)
        res.status(200).json(usuario)
    } catch(err) {
        console.log(err);
        res.status(500).json({
            erro: `Deu ruim aqui chefe quando fui procura os caras, mas nem eu sei o que deu ruim`
        });
    }
};

// sem mysql insjection
async function listarUsuarioId(req,res){

    const { id } = req.params;
    const sql = 'SELECT * FROM usuarios WHERE id = ?';
    
    // continuar a partir daqui e achar o erro
};

module.exports = {
    listarUsuarioEmail,
    listarUsuarioId
};