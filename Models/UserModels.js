var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var projectSchema = Schema({
    nombre: String,
    direccion: String,
    email: String,
    tipoPago:String,
    saldo: Number
});

//exporta el modelo para usarlo en otros ficheros 
module.exports = mongoose.model('clientes', projectSchema);