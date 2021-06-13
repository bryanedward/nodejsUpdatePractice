var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// el molde 
var projectSchema = Schema({
    nombre: String,
    direccion: String,
    email: String,
    saldo: Number
});

//exporta el modelo para usarlo en otros ficheros 
module.exports = mongoose.model('clientes', projectSchema);