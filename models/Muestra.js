const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Create Schema

const MuestraSchema = new Schema({
  estatura: {
    type: String,
    required: true
  },
  peso: {
    type: String,
    required: true
  },
  edad: {
    type: String,
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
