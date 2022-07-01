const mongoose = require('mongoose');
const PersonagemSchema = new mongoose.Schema({
  NomeDoFilme: {
    type: String,
    require: true,
  },
  personagem: {
    type: String,
    require: true,
  },
  tarefa: {
    type: String,
    require: true,
  },
  tempo: {
    type: String,
    require: true,
  },
});

const Personagem = mongoose.model('personagens', PersonagemSchema);
module.exports = Personagem;
