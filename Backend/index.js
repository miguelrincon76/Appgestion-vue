//Importar express
import express from "express";
import morgan from "morgan";
import { createAdmin, createRoles } from "./libs/initialSetup";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

import materialRoute from "./routes/materials.routes";
//const cotizacionRoute = require("./routers/cotizacion.route");

require("dotenv").config();
//console.log(process.env);

//Importar mongoose
const mongoose = require("mongoose");
//Importar url de conexión a la BD
const database = require("./database/db");
//Importar cors
const cors = require("cors");

class Server {
  //constructor
  constructor() {
    createRoles();
    createAdmin();

    this.conectarBD();
    this.app = express();
    //Indicar el puerto por el que se ejecutará el servidor
    this.app.set("port", process.env.PORT || 4000);
    //Indicar que las solicitudes http se trabajará en JSON
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    //Rutas*
    const router = express.Router();
    router.get("/", (req, res) => {
      console.log("Nueva conexión");
      res.status(200).json({
        message: "¡ CORRIENDO SERVIDOR MODULO DE COTIZACION APPGESTION !",
      });
    });

    this.app.use(router);
    this.app.use("/api/auth", authRoutes);
    this.app.use("/api", userRoutes);
    this.app.use("/materiales", materialRoute);
    //this.app.use("/cotizaciones", cotizacionRoute);

    //Levantar el servidor/correr el servidor
    this.app.listen(this.app.get("port"), () => {
      console.log("Servidor corriendo por el puerto => ", this.app.get("port"));
    });
  }

  conectarBD() {
    mongoose.Promise = global.Promise;
    mongoose
      .connect(database.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Conexión a BD con éxito");
      })
      .catch((err) => {
        console.error("Error de conexión:", err);
      });
  }
}

const objServer = new Server();
