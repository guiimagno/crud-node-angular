const router = require('express').Router();


const candidato = require("../controllers/candidato.controller");

router.get("/", candidato.getCandidato);
router.post("/", candidato.createCandidato);
router.get("/:id", candidato.getCandidato);
router.put("/:id", candidato.editCandidato);
router.delete("/:id", candidato.deleteCandidato);

module.exports = router;