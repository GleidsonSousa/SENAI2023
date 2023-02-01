const express = require('express');
const router = express.Router();

const RotaTarefas = require("../controller/tarefas");


router.get('/tarefas', RotaTarefas.read);
router.get('/tarefas/:id_tarefa', RotaTarefas.readTarefa);
router.post('/tarefas/create', RotaTarefas.create);
router.put('/tarefas/update/:id_tarefa', RotaTarefas.update);
router.delete('/tarefas/delete/:id_tarefa', RotaTarefas.remove);

module.exports = router;