const app = require("./app");

const host = 3000;

app.listen(host, ()=> {
    console.log(`Servidor rodando em http://localhost:${host}`)
});