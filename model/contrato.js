const mongoose = require('mongoose')

/*Cria o "formato" do modelo do banco de dados, definindo os campos que existirão e seus respectivos tipos*/
const ContratoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    hash:{
        type: String,
        required: true,
        unique:true
    },
    idUsuario:{
        type: String,
        required: true,
    },
    data:{
        type: String,
        required: true,
    },
},{collection: 'contratos'})
/*Cria de fato o modelo com base no esquema criado acima e torna o módulo exportável para outros programas*/
const model = mongoose.model('ContratoSchema', ContratoSchema)
module.exports = model
