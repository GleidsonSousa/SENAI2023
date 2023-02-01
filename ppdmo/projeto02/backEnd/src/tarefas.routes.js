const express = require('express');
const router = express.Router();

const RotaTarefas = require("./tarefasController");

router.post("/tarefas/create", RotaTarefas.criarTarefa);
router.get("/tarefas/read", RotaTarefas.listarTarefa);
router.delete("/tarefas/delete/:id_tarefa", RotaTarefas.excluirTarefa);
router.put("/tarefas/update", RotaTarefas.editarTarefa);
router.put("/tarefas/update-finalizado/:id_tarefa", RotaTarefas.editarFinal);
router.put("/tarefas/update-cancelado/:id_tarefa", RotaTarefas.editarCanc);


module.exports = router