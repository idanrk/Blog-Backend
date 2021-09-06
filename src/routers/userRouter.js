const express = require('express')
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')
const router = express.Router()

// "==>/users/"
router.post('/', userController.createUser)
router.post('/login', userController.loginUser)
router.patch('/:id', auth, userController.updateUser)
router.delete('/:id', auth, userController.deleteUser)

module.exports = router