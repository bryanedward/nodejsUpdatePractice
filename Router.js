var { Router } = require('express')
var userControllers = require('./Controllers/UserControllers')
var router = Router();

router.get('/', userControllers.consulDeposito)
router.get('/obtenerRepo', userControllers.consultaRepos)
router.post('/deposito', userControllers.saveDeposito)
router.post('/registro', userControllers.saveRegister)
router.post('/retirar', userControllers.saveRetirar)
module.exports  = router

