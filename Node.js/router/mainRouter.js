const express = require("express")
const router = express.Router()

const {
    register,
    login
} = require("../controllers/mainController")

const {validateRegister} = require("../modules/validator")


router.post('/register', validateRegister, register)
router.post('/login', login)


module.exports = router

