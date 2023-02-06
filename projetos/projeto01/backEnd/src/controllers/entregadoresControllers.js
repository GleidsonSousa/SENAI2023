const Entrega = require('../models/entregadores');
const conDB = require('../dao/bcdDAO');



const listarEntregas = (req, res) => {
    conDB.query(Entrega.toReadAll(), (err, result) => {
        if (err == null) {
            if (result.length > 0)
                res.json((result)).end();

            else
                res.status(404).end();
        }
    });
}

const listarDisponibilidade = (req, res) => {
    conDB.query(Entrega.toReadEntregadores(), (err, result) => {
        if (err == null) {
            if (result.length > 0)
                res.json((result)).end();

            else
                res.status(404).end();
        }
    });
}


const listarId = (req, res) => {
    conDB.query(Entrega.toReadId(req.params), (err, result) => {
        if (err == null) {
            if (result.length > 0)
                res.json((result)).end();
            else
                res.status(404).end();
        }
    });
}

const editarStatus = (req, res) => {
    conDB.query(Entrega.toUpdateEntregador(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const Entlogin = (req, res) => {
    conDB.query(Entrega.toLogin(req.body), (err, result) => {
        if (err == null) {
            if (result.length > 0) {
                if (req.body.senha == result[0].senha) {
                    res.status(200).json(result[0]).end()
                } else {
                    res.status(400).end()
                }
            } else {
                res.status(404).json({'msg': 'Entregador não encontrado'}).end()
            }
        } else {
            res.status(500).json(err).end()
        }
    })
        }
     
             





module.exports = {
    listarEntregas,
    listarId,
    Entlogin,
    listarDisponibilidade,
    editarStatus
}