const express = require("express");
const app = express();

const axios = require("axios");

const port = 5000;

app.get("/pokemon/all", (req, res) => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=9999")
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
