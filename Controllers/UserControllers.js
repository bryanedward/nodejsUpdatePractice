const UserDeposito = require('../Models/UserDeposito')
const UserRegister = require('../Models/UserRegister')
const UserRetirar = require('../Models/UserRetirar')

var userControllers = {
    consulDeposito: async function (req, res) {
        const query = await UserDeposito.find({})
        res.status(200).send(query)

    }, consultaRepos: async function (req, res) {
       const query = await UserRetirar.find({})
       res.status(200).send(query) 
    },
    saveDeposito: async function (req, res) {
        const query = await UserDeposito()
        const {nombreClient, numeroCuenta, nombreint, fecha, valor} = req.body
        query.nombreClient = nombreClient
        query.numeroCuenta = numeroCuenta
        query.nombreint = nombreint
        query.fecha = fecha
        query.valor = valor
        query.save((error) =>{
            if (!error){
                res.json({mensaje: "creado"})
            }else {
                res.json({mensaje:"error"})
            }
        })    
        }, saveRetirar : async function name(req,res) {
            const query = await UserRetirar()
            const {nombreClient, numeroCuenta, nombreint, fecha, valor} = req.body
            query.nombreClient = nombreClient
            query.numeroCuenta = numeroCuenta
            query.nombreint = nombreint
            query.fecha = fecha
            query.valor = valor
            query.save((error) =>{
                if (!error){
                    res.json({mensaje: "creado"})
                }else {
                    res.json({mensaje:"error"})
            }
        })
          
        },
        saveRegister: async function (req,res) {
            //registrar un nuevo usuario
            const query = await UserRegister()
            const {nombre, apellido, correo, pass} = req.body
            query.nombre = nombre 
            query.apellido = apellido
            query.correo = correo
            query.pass = pass
            query.save((error) => {
                if (!error){
                    res.json({mensaje: "creado"})
                }else {
                    res.json({mensaje:"error"})
                }
            })     
        }

    }
    


module.exports = userControllers