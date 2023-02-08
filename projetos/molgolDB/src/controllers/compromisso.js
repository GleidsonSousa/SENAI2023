var compromisso = require('../models/compromisso');

const test = async (req, res) => {
    res.status(200).json("API online, aguardando requisições").end();
}

module.exports = {
    test
}