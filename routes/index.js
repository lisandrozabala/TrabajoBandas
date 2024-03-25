var express = require('express');
var router = express.Router();
const bandasController = require('../controllers/bandasController');

router.get('/', bandasController.index);
router.get('/id/:id', bandasController.filtrarPorID);
router.get('/genero/:genero', bandasController.filtrarPorGenero);

module.exports = router;
