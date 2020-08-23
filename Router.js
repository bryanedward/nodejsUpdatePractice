var { Router } = require('express')
var userControllers = require('./Controllers/UserControllers')
var router = Router();

router.get('/', userControllers.home)
router.get('/vista', userControllers.view)

module.exports  = router

