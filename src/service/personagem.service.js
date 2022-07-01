const Personagens = require('../models/Personagem');

const findAllPersonagensService = async () => {
  const personagens = await Personagens.find();
  return personagens;
};

const findByIdPersonagemService = async (parametroId) => {
  const personagem = await Personagens.findById(parametroId);

  return personagem;
};

const createPersonagemService = async (newPersonagem) => {
  const creatPersonagem = await Personagens.create(newPersonagem);
  return creatPersonagem;
};

const updatePersonagemService = async (Id, personagemEdit) => {
  const personagemUpdate = await Personagens.findByIdAndUpdate(
    Id,
    personagemEdit,
  );
  return personagemUpdate;
};

const deletePersonagemService = async (Id) => {
  return await Personagens.findByIdAndDelete(Id);
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
