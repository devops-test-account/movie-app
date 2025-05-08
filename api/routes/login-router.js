const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/UserController')

router.post('/login', userCtrl.login)
router.get('/health', userCtrl.health)

module.exports = router