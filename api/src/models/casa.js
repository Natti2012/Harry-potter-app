const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombre: { type: String },
    descripcion: { type: String },
    img: { type: String },
    quidditch: { type: String },
    Caracteristicas: {
        type: Object,
        Jefes: { type: String },
        Colores: { type: String },
        Animal: { type: String },
        Fundador: { type: String },
        Fantasma: { type: String },
        Cualidades: { type: String },
        Localizacion: { type: String },
        Guardia: { type: String },
        Elemento: { type: String },
        Reliquia: { type: String },

    },


});
module.exports = Casas = mongoose.model("Casa", UserSchema);
