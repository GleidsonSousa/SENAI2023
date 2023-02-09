var compromisso = require('../models/compromisso');

const test = async (req, res) => {
    res.status(200).json("API online, aguardando requisições").end();
}

const create = (req, res) => {
    const compromisso = new compromisso(req.body)
    compromisso.save(err=>{
          if (err) {
            res.status(500).json({erro:err}).end();
          } else {
            res.status(201).end();
          }  
    })
}

module.exports = {
    test,
    create
}