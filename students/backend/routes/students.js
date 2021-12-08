const express = require("express");
const app = express();

let students = require("../studentsData.json");

app.get("/", (req, res) => {
  res.json(students);
});

app.post("/", (req, res) => {
  console.log(req.body);
  const name = {
    ...req.body,
  };
  students = [...students, name];
  res.json(students);
});
module.exports = app;
