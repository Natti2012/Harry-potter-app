const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({

libro: {type : String},

titulo_original:{type : String},

fecha_de_lanzamiento: {type : String},
 
autora:{type : String},
  
descripcion:{type : String},

portada:{type : String},

})
module.exports = Libros = mongoose.model('Libro', UserSchema)

