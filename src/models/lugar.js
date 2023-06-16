const mongoose = require("mongoose");
const { Schema } = mongoose;

const lugarSchema = new Schema(
    {
        nombre: { type: String, required: true },
        ubicacion: { type: String, required: true },
        numeroTelefonico: { type: String, required: true },
        numeroTelefonico2: { type: String, required: true },
        horario: { type: String, required: true },
        sitioWeb: { type: String, sitioWeb: true },
        ubicacionUrl: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("Lugar", lugarSchema);
