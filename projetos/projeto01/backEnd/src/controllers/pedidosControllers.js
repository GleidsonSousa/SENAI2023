const Pedido = require('../models/pedidos');
const conDB = require('../dao/bcdDAO');

const criarPedido = (req, res) => {
    conDB.query(Pedido.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarPedido = (req, res) => {
    conDB.query(Pedido.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarIdPedido = (req, res) => {
    conDB.query(Pedido.toReadId(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).json({"mensagem":"Verifique o  ID inserido"}).end();
        else
            res.status(500).json(err ,{"mensagem":"Verifique o  ID inserido"}).end();
    });
}

const excluirPedido = (req, res) => {
    conDB.query(Pedido.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const editarPedido = (req, res) => {
    conDB.query(Pedido.toUpdatePedido(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const editarEntregador = (req, res) => {
    conDB.query(Pedido.toUpdateEntregador(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const editarFinal = (req, res) => {
    conDB.query(Pedido.toUpdateEntregue(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    criarPedido,
    excluirPedido,
    listarPedido,
    listarIdPedido,
    editarPedido,
    editarEntregador,
    editarFinal
}