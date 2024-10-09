const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Esquema de empleado
const empleadoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
});

// Método para encriptar contraseña
empleadoSchema.methods.encriptarContraseña = async function (contraseña) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(contraseña, salt);
};

// Método para verificar contraseña
empleadoSchema.methods.verificarContraseña = async function (contraseña) {
  return await bcrypt.compare(contraseña, this.contraseña);
};

// Modelo
const Empleado = mongoose.model("Empleado", empleadoSchema);

module.exports = Empleado;
