// Servidor en express
const express = require("express");
const app = express();
// import CORS
const cors = require("cors");

// Check port
const port = process.env.PORT || 8000;

// const passport = require("passport");
// const users = require("./users");

var dotenv = require("dotenv");
dotenv.config();

const corsOptions = {
  origin: "https://your-app-name.herokuapp.com",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.options("*", cors());

// Use CORS
// app.use(cors());

// ----------- BODY PARSER  ---------------
var bodyParser = require("body-parser"); // for parsing application/json
app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Require Schema's
const Muestra = require("../models/Muestra");

// -------------   CRUD  -----------------
// app.get("/", (req, res) => {
//   res.send("Hello World!!!");
// });

// //get all Ligas by id
// app.get("/api/liga", function(req, res) {
//     Liga.find({}, function(err, liga) {
//       Deporte.populate(liga, { path: "deporte" }, function(err, liga) {
//         return err
//           ? res.status(400).send({ mensaje: "Hay un error", res: err })
//           : res.status(200).send({ mensaje: "Ligas!!", res: liga });
//       });
//     });
//   });

//obtener todos los players
app.get("/api/Data", (req, res) => {
  Muestra.find()
    .exec()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
});

// //  C: CREATE ------------
app.post("/api/muestra", (req, res) => {
  //   // Recibir el jugador
  //   console.log(req.body);

  //   // Guardar en db
  const nuevaEncuesta = new Muestra(req.body);
  nuevaEncuesta.save((err, nuevaEncuesta) => {
    return err
      ? res.status(400).send({ mensaje: "Error en envio", res: err })
      : res
          .status(200)
          .send({ mensaje: "Encuesta exitosa", res: nuevaEncuesta });
  });
});

// // ---------- POST
// app.post("/api/player", (req, res) => {
//   // Recibir el jugador
//   console.log(req.body);

//   // Guardar en db
//   const newPlayer = new Player(req.body);
//   newPlayer.save((err, newPlayer) => {
//     return err
//       ? res
//           .status(400)
//           .send({ mensaje: "Hay un error - post Player", res: err })
//       : res.status(200).send({ mensaje: "Player guardado", res: newPlayer });
//   });
// });

module.exports = { app, port };
