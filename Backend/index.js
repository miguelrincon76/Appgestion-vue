let app = require("../app");
import "../Backend/database/conexion";

//Levantar el servidor/correr el servidor
app.listen(app.get("port"));

console.log("Servidor corriendo por el puerto => ", app.get("port"));
