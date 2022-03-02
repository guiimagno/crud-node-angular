const mongoose = require('mongoose');

const Candidato = mongoose.model('Candidato', {
    nome: { type: String, require: true },
    dataNascimento: { type: String, require: true },
    cpf: { type: String, require: true },
    email: { type: String, require: true },
    telefone: { type: String, require: true },

})
    
module.exports = Candidato;