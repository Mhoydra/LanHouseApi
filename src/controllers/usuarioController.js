const conexao = require("../db/conexao");

// mysql insjection ocorre
async function listarUsuarioEmail(req,res){
    
    const usuario = await conexao.query(
        'SELECT * FROM usuarios WHERE emailUsuario'
    );

    try{
        console.log(usuario)
        res.status(200).json(usuario)
    } catch(err) {
        console.error(err);
        res.status(500).json({
            mensagem: `Deu ruim aqui chefe quando fui procura os caras, mas nem eu sei o que deu ruim`
        });
    }
};

// sem mysql insjection
async function listarUsuarioId(req,res){

    try {
        const { idUsuario } = req.params;

        const [result] = await conexao.query(
            'SELECT * FROM usuarios WHERE idUsuario = ?',
            [idUsuario]
        );

        return res.json(result);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ erro: err.message });
    }
    // continuar a partir daqui e achar o erro
};

module.exports = {
    listarUsuarioEmail,
    listarUsuarioId
};