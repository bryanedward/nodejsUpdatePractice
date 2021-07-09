var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var projectSchema = Schema({
    nombre: String,
    apellido: String,
    correo: String,
    pass:String
});

//exporta el modelo para usarlo en otros ficheros 
module.exports = mongoose.model('registros', projectSchema);