const express = require('express');

const router = express.Router();

const Cliente = require('../controller/cliente');



router.post('/clientes', Cliente.create);
router.put('/clientes', Cliente.update);
router.get('/clientes', Cliente.read);
router.get('/clientes/:id', Cliente.readOne);



module.exports = router;
