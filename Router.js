const { Router } = require('express')
const router = Router();

router.get('/', function(req, res){
    res.send('ok')
});




module.exports  = router;

