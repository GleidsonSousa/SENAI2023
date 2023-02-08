const express = require('express');

const router = express.Router();

const Setor = require('../controller/setor');
const Vendedor = require('../controller/vendendor');
const Venda = require('../controller/venda');
const Produto = require('../controller/produtos');
const Detalhe = require('../controller/detalhes');


router.post('/setores', Setor.create);
router.post('/setores/Many', Setor.createMany);
router.get('/setores', Setor.read);
router.get('/setores/:id', Setor.readOne);

router.post('/produtos', Produto.create);
router.post('/produtos/Many', Produto.createMany);
router.get('/produtos', Produto.read);

router.post('/vendedores', Vendedor.create);
router.post('/vendedores/Many', Vendedor.createMany);
router.get('/vendedores', Vendedor.read);
router.get('/vendedores/:id', Vendedor.readOne);


router.post('/venda', Venda.create);
router.post('/venda/Many', Venda.createMany);
router.get('/venda', Venda.read);
router.get('/venda/:id', Vendedor.readOne);


router.post('/detalhe', Detalhe.create);
router.post('/detalhe/Many', Detalhe.createMany);
router.get('/detalhe', Detalhe.read);

module.exports = router;
