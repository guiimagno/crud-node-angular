const Candidato = require("../models/Candidato.js");

const candidatoController = {};

candidatoController.getCandidatos = async (req, res, next) => {
  const candidatos = await Candidato.find();
  res.json(candidatos);
};

candidatoController.createCandidato = async (req, res, next) => {
  const candidato = new Candidato({
    nome: req.body.nome,
    dataNascimento: req.body.dataNascimento,
    cpf: req.body.cpf,
    email: req.body.email,
    telefone: req.body.telefone
  });
  await candidato.save();
  res.json({ status: "Candidato criado!" });
};

candidatoController.getCandidato = async (req, res, next) => {
  const { id } = req.params;
  const candidato = await Candidato.findById(id);
  res.json(candidato);
};

candidatoController.editCandidato = async (req, res, next) => {
  const { id } = req.params;
  await Candidato.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Candidato atualizado!" });
};

candidatoController.deleteCandidato = async (req, res, next) => {
  await Candidato.findByIdAndRemove(req.params.id);
  res.json({ status: "Candidato deletado!" });
};

module.exports = candidatoController;