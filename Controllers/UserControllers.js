var userModels = require('../Models/UserModels')

var userControllers = {
    getClient: async function (req, res) {
        const query = await userModels.find({})
        res.status(200).send(query
        )

    },
    saveclient: async function (req, res) {
        var limiteContador = 10;
        var iniciContaodor = 0;
        const query = await userModels()
        const {nombre, dirreccion, email, saldo, tipoPago} = req.body
        query.nombre = nombre
        query.direccion = dirreccion
        query.email = email
        query.tipoPago = tipoPago
        query.saldo = saldo
        query.save((error) =>{
            if (!error){
                res.json({mensaje: "creado"})
            }else {
                res.json({mensaje:"error"})
            }
        })    
        }
    }


module.exports = userControllers