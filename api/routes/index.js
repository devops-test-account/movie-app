const express = require('express')
const router = express.Router();
const movie = require('./movie-router')
const login = require('./login-router')

router.use('/movie', movie)
router.use('/user', login)

module.exports = router;

