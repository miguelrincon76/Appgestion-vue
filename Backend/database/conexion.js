const mongoose = require("mongoose");
let database = require("../database/db");

mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(() => {
    console.log("Conexión a BD con éxito");
  })
  .catch((err) => {
    console.error("Error de conexión a DB:", err);
  });
