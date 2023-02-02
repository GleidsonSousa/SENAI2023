const express = require('express');

const router = express.Router();

const Setor = require('../controller/setor');
const Vendedor = require('../controller/vendendor');
const Produto = require('../controller/produtos');

router.post('/setores', Setor.create);
router.get('/setores', Setor.read);
router.get('/setores/:id', Setor.readOne);

router.post('/produtos', Produto.create);
router.get('/produtos', Produto.read);

router.post('/vendedores', Vendedor.create);
router.get('/vendedores', Vendedor.read);

module.exports = router;
