const express = require('express');
const router = express.Router();

const RotaEntregadores = require("../controllers/entregadoresControllers");

router.get("/entregadores/read", RotaEntregadores.listarEntregas);
router.get("/entregadores/read/:id_entregador", RotaEntregadores.listarId);

module.exports = router