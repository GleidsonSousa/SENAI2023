const express =  require('express')
const router = express.Router()

const Motorista = require('../controllers/motorista')
const Usuario = require('../controllers/usuario')
const Veiculo = require('../controllers/veiculo')
const Manutencao = require('../controllers/manutencao')
const Operacao = require('../controllers/operacao')



router.post('/motoristas', Motorista.create)
router.get('/motoristas', Motorista.read)
router.get('/motoristas/:id', Motorista.readOne)
router.put('/motoristas/:id', Motorista.update)
router.delete('/motoristas/:id', Motorista.remove)

router.post('/usuario', Usuario.create)
router.post('/login', Usuario.login)
router.get('/usuario', Usuario.read)
router.get('/usuario/:id', Usuario.readOne)
router.put('/usuario/:id', Usuario.update)
router.delete('/usuario/:id', Usuario.remove)

router.post('/veiculo', Veiculo.create)
router.get('/veiculo', Veiculo.read)
router.get('/veiculo/:id', Veiculo.readOne)
router.put('/veiculo/:id', Veiculo.update)
router.delete('/veiculo/:id', Veiculo.remove)

router.post('/manutencao', Manutencao.create)
router.get('/manutencao', Manutencao.read)
router.get('/manutencao/:id', Manutencao.readOne)
router.put('/manutencao/:id', Manutencao.update)
router.delete('/manutencao/:id', Manutencao.remove)

router.post('/operacao', Operacao.create)
router.get('/operacao', Operacao.read)
router.get('/operacao/:id', Operacao.readOne)
router.put('/operacao/:id', Operacao.update)
router.put('/operacao/final/:id', Operacao.updateFinalizar)

router.delete('/operacao/:id', Operacao.remove)





module.exports = router;