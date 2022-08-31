const { Router } = require('express');
const libros = require('./libros')
const hechizos = require('./hechizos')
const personajes = require('./personaje')
const varitas = require('./varitas')
const casas = require('./casas')
const router = Router();

router.use('/casas', casas)
router.use('/libros', libros)
router.use('/hechizos', hechizos)
router.use('/personajes', personajes)
router.use('/varitas', varitas)


module.exports = router;