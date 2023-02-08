const express = require('express');

const router = express.Router();

const Comp = require('../controllers/compromisso');

router.get('/', Comp.test);

module.exports = router;
