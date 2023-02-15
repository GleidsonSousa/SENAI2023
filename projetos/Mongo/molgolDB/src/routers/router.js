const express = require('express');

const router = express.Router();

const Comp = require('../controllers/compromisso');

router.get('/', Comp.test);
router.post('/create', Comp.create);


module.exports = router;
