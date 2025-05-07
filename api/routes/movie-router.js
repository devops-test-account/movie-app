const express = require('express')
const MovieCtrl = require('../controllers/movie-ctrl')
const authenticateToken = require('../middleware/authenticateToken')
const router = express.Router()

router.get('/', MovieCtrl.getMovies)
router.post('/', MovieCtrl.createMovie)
router.put('/:id', MovieCtrl.updateMovie)
router.delete('/:id', MovieCtrl.deleteMovie)
router.get('/:id', MovieCtrl.getMovieById)

module.exports = router