import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import helmet from "helmet";
import { createAdmin, createRoles } from "./libs/initialSetup";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import materialRoutes from "./routes/materials.routes";

//const cotizacionRoute = require("./routes/cotizacion.routes");

const app = express();
const cors = require("cors");
var corsOptions = {
  origin: "*", //reemplazar con dominio
  optionsSuccessStatus: 200, //some legacy browsers (IE11, varios SmartTV) choke on 204
};

createRoles();
createAdmin();

app.set("pkg", pkg);
//Indicar el puerto por el que se ejecutará el servidor
app.set("port", process.env.PORT || 4000);
//Indicar que las solicitudes http se trabajará en JSON
app.use(morgan("dev"));
app.set("json spaces", 4);
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Rutas

app.get("/", (req, res) => {
  console.log("Nueva conexión");
  res.status(200).json({
    message: "¡ CORRIENDO SERVIDOR MODULO DE COTIZACION APPGESTION !",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});

//añadir las rutas al servidor

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/materials", materialRoutes);

//app.use("/api/materiales", materialRoute);
//app.use("/api/cotizaciones", cotizacionRoute);

export default app;
