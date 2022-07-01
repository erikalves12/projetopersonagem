const personagemService = require('../service/personagem.service');

const mongoose = require('mongoose');

const findAllPersonagensController = async (req, res) => {
  const personagens = await personagemService.findAllPersonagensService();
  if (personagens.length == 0) {
    return res
      .status(401)
      .send({ message: 'Não existem personagens cadastrados!' });
  }
  res.send(personagens);
};

const findByIdPersonagemController = async (req, res) => {
  const parametroId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id inexistente!' });
  }
  const personagemEscolhido = await personagemService.findByIdPersonagemService(
    parametroId,
  );
  res.send(personagemEscolhido);
};

const createPersonagemController = async (req, res) => {
  const personagem = req.body;

  if (
    !personagem ||
    !personagem.NomeDoFilme ||
    !personagem.personagem ||
    !personagem.tarefa ||
    !personagem.tempo
  ) {
    return res.status(400).send({ message: 'Campo incompleto' });
  }

  const newPersonagem = await personagemService.createPersonagemService(
    personagem,
  );
  res.status(201).send(newPersonagem);
};

const updatePersonagemController = async (req, res) => {
  const paramsId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(paramsId)) {
    return res.status(400).send({ message: 'Id inexistente!' });
  }
  const personagemEdit = req.body;
  if (
    !personagemEdit ||
    !personagemEdit.NomeDoFilme ||
    !personagemEdit.personagem ||
    !personagemEdit.tarefa ||
    !personagemEdit.tempo
  ) {
    return res.status(400).send({ message: 'Campo incompleto' });
  }
  const updatePersonagem = await personagemService.updatePersonagemService(
    paramsId,
    personagemEdit,
  );
  res.send(updatePersonagem);
};

const deletePersonagemController = async (req, res) => {
  const paramsId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(paramsId)) {
    return res.status(400).send({ message: 'Id inexistente!' });
  }
  await personagemService.deletePersonagemService(paramsId);
  res.send({ message: 'Personagem deletado com suceso!!!' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
