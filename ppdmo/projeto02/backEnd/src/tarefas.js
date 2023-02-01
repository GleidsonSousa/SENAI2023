const toCreate = (model) => {
    return `INSERT INTO tarefas VALUES (DEFAULT, '${model.descricao}','${model.horario_tarefa}', "" , 1)`;
}

const toReadAll = () => {
    return "SELECT * FROM tarefas ORDER BY id_tarefa DESC";
}

const toDelete = (model) => {
    return `DELETE FROM tarefas WHERE id_tarefa = ${model.id_tarefa}`;
}

const toUpdateTarefa = (model)=>{
    return `UPDATE tarefas SET   descricao = '${model.descricao}', horario_tarefa = '${model.horario_tarefa}' WHERE id_tarefa = ${model.id_tarefa}`;
    }

const toUpdateStatusFinalizada = (model)=>{
    return `UPDATE tarefas SET horario_encerramento = curTime(), status = 2  WHERE id_tarefa = ${model.id_tarefa}`;
        }

        const toUpdateStatusCancelada = (model)=>{
        return `UPDATE tarefas SET horario_encerramento = curTime(), status = 3  WHERE id_tarefa = ${model.id_tarefa}`;
        }


module.exports = {
    toCreate,
    toReadAll,
    toDelete,
    toUpdateTarefa,
    toUpdateStatusCancelada,
    toUpdateStatusFinalizada
}