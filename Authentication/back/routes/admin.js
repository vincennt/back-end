const express = require("express");
const app = express();
users = require("../users.json");
const { verifyUser } = require("../middlewares/auth");

app.get("/admin", verifyUser, (req, res) => {
  if (req.user) {
    res.json(users);
  } else {
    res.status(500).send("An error occured");
  }
});

module.exports = app;
