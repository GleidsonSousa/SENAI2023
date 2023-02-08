const express = require('express');

const router = express.Router();

const Entregador = require('../controller/entregador');
// const Pedido = require('../controller/Pedido');

router.get('/', Entregador.test);
router.post('/entregador/create', Entregador.create);
// router.post('/login', Entregador.login);
// router.get('/Entregadors', Entregador.read);
// router.get('/Entregador/:id', Entregador.readOne);

// router.post('/Pedido', Pedido.create);
// router.get('/publicacoes', Pedido.read);

module.exports = router;