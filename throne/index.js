const express = require("express");
const app = express();
const data = require("./data.json");
const axios = require("axios");
const { response } = require("express");

const port = 5000;

app.get("/game-of-thrones/json", (req, res) => {
  res.send(data);
});
app.get("/game-of-trhones/url", (req, res) => {
  axios
    .get("https://thronesapi.com/api/v2/Characters")
    .then((response) => res.json(response.data))

    .catch((error) => res.status(error.response.status).send("Not found"));
});

app.listen(port, () => {
  console.log("serveur port : " + port);
});
