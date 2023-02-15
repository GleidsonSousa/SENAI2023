const express = require('express');
const router = express.Router();

const RotaFuncionario = require("../controller/funcionarios");


router.get('/funcionarios', RotaFuncionario.read);
router.get('/funcionarios/:id', RotaFuncionario.readFunc);
router.post('/funcionarios/create', RotaFuncionario.create);
router.put('/funcionarios/update/:id', RotaFuncionario.update);
router.delete('/funcionarios/delete/:id', RotaFuncionario.remove);

module.exports = router;