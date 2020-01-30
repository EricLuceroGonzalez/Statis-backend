// Mongoose
const mongoose = require("mongoose");

// Conectar mongoose con MongoDB
var db_url = process.env.DB_URI
// DB Config
// const db_url = require('../config/keys').mongoURI;


mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (!err) {
    console.log("Conexion exitosa a MongoDB!!");
  } else {
    console.log('Something bad happen with database');
  }
});