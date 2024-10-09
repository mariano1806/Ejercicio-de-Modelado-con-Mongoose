const mongoose = require("mongoose");

// Esquema de venta
const ventaSchema = new mongoose.Schema({
  empleadoId: {
    // Referencia al empleado que realizó la venta
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empleado",
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  monto: {
    type: Number,
    required: true,
  },
  producto: {
    type: String,
    required: true,
  },
});

// Modelo
const Venta = mongoose.model("Venta", ventaSchema);

module.exports = Venta;
