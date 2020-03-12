const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Create Schema

const MuestraSchema = new Schema({
  estatura: {
    type: Number,
    required: false
  },
  peso: {
    type: Number,
    required: false
  },
  imc: {
    type: Number,
    required: false
  },
  edad: {
    type: Number,
    required: false
  },
  sangre: {
    type: String,
    required: false
  },
  genero: {
    type: String,
    required: false
  },
  lateralidad: {
    type: String,
    required: false
  },
  ejercita: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Muestra = mongoose.model("muestras", MuestraSchema);
