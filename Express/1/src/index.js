//class24
const express = require("express");

const app = express();

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(`Ha pasado por el middleware ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.end("Home");
});

app.get("/yo", (req, res) => {
  res.end("En la ruta /yo");
});

app.listen(4567, () => {
  console.log("Servidor Express escuchando en el puerto 4567");
});
