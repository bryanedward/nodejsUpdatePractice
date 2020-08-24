var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// el molde 
var projectSchema = Schema({
});

//exporta el modelo para usarlo en otros ficheros 
module.exports = mongoose.model('usermodels', projectSchema); 