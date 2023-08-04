const express = require("express");

const { list } = require("./list");
const app = express();

app.use(express.json());

const routes = require("./routers/products");
app.use("/list/phones", routes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/list", (req, res) => {
  res.send(list);
});

const PUERTO = process.env.PORT || 5555;
app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
