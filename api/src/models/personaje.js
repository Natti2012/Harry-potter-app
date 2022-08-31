const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2')
const UserSchema = new Schema({
nombre: { type: String },
 especie: { type: String },
genero: { type: String },
casa: { type: String },
fechaDeNacimiento: { type: String },
mago: { type: Boolean },
 ascendencia: { type: String },
 ojos: { type: String },
pelo: { type: String },
 patronus: { type: String },
  estudiante: { type: Boolean },
  HogwartsStaff: { type: Boolean },
  vivo: { type: Boolean },
  actor: { type: String },
  imagen: { type: String },
});
UserSchema.plugin(mongoosePaginate)
module.exports = Personajes = mongoose.model("Personajes", UserSchema);
