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





module.exports = {
    listarEntregas,
    listarId,
    listarDisponibilidade,
    editarStatus
}