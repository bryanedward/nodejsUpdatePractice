var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var projectSchema = Schema({
    nombreClient: String,
    numeroCuenta: Number,
    nombreint: String,
    fecha:String,
    valor: Number
});

//exporta el modelo para usarlo en otros ficheros 
module.exports = mongoose.model('retirar', projectSchema);