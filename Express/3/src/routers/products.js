const express = require("express");
const { list } = require("../list");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send(list.phones);
});

routes.get("/:smartphone", (req, res) => {
  const smartphone = req.params.smartphone;
  const result = list.phones.filter((phone) => phone.name.includes(smartphone));

  if (result.length === 0) {
    return res.status(404).send("No se encontró el producto");
  }

  res.send(result);
});

routes.post("/", (req, res) => {
  const newPhone = req.body;

  list.phones.push(newPhone);

  console.log(newPhone);
  res.send("list.phones");
});

//
routes.put("/:id", (req, res) => {
  const phone_update = req.body;
  const id = req.params.id;

  const index = list.phones.findIndex((phone) => phone.id == id);

  list.phones[index] = phone_update;
  if (index < 0) {
    return res.status(404).send("No se encontró el producto");
  }

  res.send(list.phones);
});

routes.patch("/:id", (req, res) => {
  const infoUpdate = req.body;
  const id = req.params.id;

  const index = list.phones.findIndex((phone) => phone.id == id);

  if (index < 0) {
    return res.status(404).send("No se encontró el producto");
  }

  const editPhone = list.phones[index];

  Object.assign(editPhone, infoUpdate);

  res.send(list.phones);
});

routes.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = list.phones.findIndex((phone) => phone.id == id);

  if (index < 0) {
    return res.status(404).send("No se encontró el producto");
  }

  list.phones.splice(index, 1);

  res.send(list.phones);
});

module.exports = routes;
