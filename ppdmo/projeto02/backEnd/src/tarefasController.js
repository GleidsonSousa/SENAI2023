const Tarefa = require('./tarefas');
const conDB = require('./daoBD');

const criarTarefa = (req, res) => {
    conDB.query(Tarefa.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarTarefa = (req, res) => {
    conDB.query(Tarefa.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const excluirTarefa = (req, res) => {
    conDB.query(Tarefa.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const editarTarefa = (req, res) => {
    conDB.query(Tarefa.toUpdateTarefa(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const editarFinal = (req, res) => {
    conDB.query(Tarefa.toUpdateStatusFinalizada(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const editarCanc = (req, res) => {
    conDB.query(Tarefa.toUpdateStatusCancelada(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    criarTarefa,
    listarTarefa,
    excluirTarefa,
    editarFinal,
    editarTarefa,
    editarCanc
}