const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Create Schema

const MuestraSchema = new Schema({
  estatura: {
    type: Number,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  imc: {
    type: Number,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  sangre: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  lateralidad: {
    type: String,
    required: true
  },
  ejercita: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Muestra = mongoose.model("muestras", MuestraSchema);
