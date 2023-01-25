const express = require('express');
const router = express.Router();

const RotaEntregadores = require("../controllers/entregadoresControllers");

router.get("/entregadores/read", RotaEntregadores.listarEntregas);
router.get("/entregadores/read/:id_entregador", RotaEntregadores.listarId);
router.get("/entregadores/disponivel", RotaEntregadores.listarDisponibilidade);
router.put("/entregadores/status_update", RotaEntregadores.editarStatus);



module.exports = router