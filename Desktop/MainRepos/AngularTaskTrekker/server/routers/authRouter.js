const Router = require('express')
const router = new Router()
const {check} = require("express-validator")
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', [
    check('username', "User name coud not be empty").notEmpty(),
    check('password', "password must be more than 4 and less than 8").isLength({min:4, max:8})
], authController.registration)
router.post('/login', authController.login)
router.get('/users',authMiddleware, authController.getUsers)

module.exports = router