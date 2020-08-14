var { Router } = require('express')
var userControllers = require('./Controllers/UserControllers')
var router = Router();

router.get('/', userControllers.home)

module.exports  = router

