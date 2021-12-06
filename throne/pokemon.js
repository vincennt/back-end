const express = require("express");
const app = express();

const axios = require("axios");

const port = 5000;

app.get("/pokemon/all/:offset/:limit", (req, res) => {
  const { offset, limit } = req.params;
  axios
    .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}limit=${limit}`)
    .then((response) => res.json(response.data))

    .catch((error) => res.status(error.response.status).send("Not found"));
});

app.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => res.json(response.data))
    .catch((error) => res.status(error.response.status).send("Not found"));
});
app.listen(port, () => {});
