const personagemService = require('../service/personagem.service');

const findAllPersonagensController = (req, res) => {
  const personagens = personagemService.findAllPersonagensService();
  res.send(personagens);
};

const findByIdPersonagemController = (req, res) => {
  const parametroId = Number(req.params.id);
  const imagemEscolhida =
    personagemService.findByIdPersonagemService(parametroId);
  res.send(imagemEscolhida);
};

const createPersonagemController = (req, res) => {
  const personagem = req.body;
  const newPersonagem = personagemService.createPersonagemService(personagem);
  res.send(newPersonagem);
};

const updatePersonagemController = (req, res) => {
  const paramsId = Number(req.params.id);
  const personagemEdit = req.body;
  const updatePersonagem = personagemService.updatePersonagemService(
    paramsId,
    personagemEdit,
  );
  res.send(updatePersonagem);
};

const deletePersonagemController = (req, res) => {
  const paramsId = Number(req.params.id);
  personagemService.deletePersonagemService(paramsId);
  res.send({ message: 'Personagem deletado com suceso!!!' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
