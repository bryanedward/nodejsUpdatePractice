var { Router } = require('express')
var userControllers = require('./Controllers/UserControllers')
var router = Router();

router.get('/', userControllers.getClient)
router.post('/cliente', userControllers.saveclient)

module.exports  = router

