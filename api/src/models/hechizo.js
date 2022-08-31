const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({ 
   
     uso:{type: String},
     hechizo:{type: String}
 

})
module.exports = Hechizos = mongoose.model('Hechizo', UserSchema)