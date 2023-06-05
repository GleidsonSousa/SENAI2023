const express = require('express');

const router = express.Router();


const Clientes = require('./controllers/cliente')
const Automoveis = require('./controllers/automovel')
const Concessionarias = require('./controllers/concessionaria')
const Alocacoes = require('./controllers/alocacao')
const Vendas = require('./controllers/venda')

router.get('/clientes', Clientes.read)
router.post('/clientes', Clientes.create)

router.get('/Automoveis', Automoveis.read)
router.post('/Automoveis', Automoveis.create)

router.get('/Concessionarias', Concessionarias.read)
router.post('/Concessionarias', Concessionarias.create)

router.get('/Alocacao', Alocacoes.read)
router.post('/Alocacao', Alocacoes.create)

router.get('/Vendas', Vendas.read)
router.post('Vendas/', Vendas.create)

module.exports = router;