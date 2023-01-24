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





module.exports = {
    listarEntregas,
    listarId
}