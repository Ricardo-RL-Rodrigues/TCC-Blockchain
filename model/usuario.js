const mongoose = require('mongoose')

/*Cria o "formato" do modelo do banco de dados, definindo os campos que existirão e seus respectivos tipos*/
const UsuarioSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    senha : {
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required:true
    },
    cpf:{
        type: String,
        required:true
    },
},{collection: 'usuarios'})
/*Cria de fato o modelo com base no esquema criado acima e torna o módulo exportável para outros programas*/
const model = mongoose.model('UsuarioSchema', UsuarioSchema)
module.exports = model
