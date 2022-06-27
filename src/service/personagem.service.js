const personagens = [
  {
    id: 01,
    NomeDoFilme: 'Os Vingadores',
    personagem: 'Homem de ferro',
    tarefa: 'Salvar a Humanidade',
    tempo: '3:00hs',
  },
  {
    id: 02,
    NomeDoFilme: 'Os Vingadores',
    personagem: 'Capitão America',
    tarefa: 'Resgatar a Viúva Negra',
    tempo: '6:00hs',
  },

  {
    id: 03,
    NomeDoFilme: 'Os Vingadores',
    personagem: 'Hulk',
    tarefa: 'Unir-se ao Thor',
    tempo: '12:00hs',
  },
];

const findAllPersonagensService = () => {
  return personagens;
};

const findByIdPersonagemService = (parametroId) => {
  const personagem = personagens.find((persona) => persona.id === parametroId);
  return personagem;
};

const createPersonagemService = (newPersonagem) => {
  const newId = personagens.length + 1;
  newPersonagem.id = newId;
  personagens.push(newPersonagem);
  return newPersonagem;
};

const updatePersonagemService = (Id, personagemEdit) => {
  personagemEdit['id'] = Id;
  const personagemIndex = personagens.findIndex(
    (personagem) => personagem.id == Id,
  );
  personagens[personagemIndex] = personagemEdit;
  return personagemEdit;
};

const deletePersonagemService = (Id) => {
  const personagemIndex = personagens.findIndex(
    (personagem) => personagem.id == Id,
  );
  if (personagemIndex > 0) {
    return personagens.splice(personagemIndex, 1);
  }
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
