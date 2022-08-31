const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  dueño: { type: String },
  madera: { type: String },
  longitud: { type: String },
  nucleo: { type: String },
  flexibilidad: { type: String },
  notas: { type: String },
  imagen: { type: String },
});
module.exports = Varitas = mongoose.model("Varita", UserSchema);
