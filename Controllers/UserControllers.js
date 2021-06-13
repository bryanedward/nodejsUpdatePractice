var userModels = require('../Models/UserModels')

var userControllers = {
    home: async function (req, res) {
        const query = await userModels.find({})
        res.status(200).send(query
        )

    },
    saveclient: async function (req, res) {
        const query = await userModels()
        const {nombre, dirreccion, email, saldo} = req.body
        query.nombre = nombre
        query.direccion = dirreccion
        query.email = email
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