const express = require("express");
const app = express();

const port = 5000;

const engine = require("express-handlebars").engine;
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form");
});
app.post("/form", (req, res) => {
  console.log(req.body);
  res.send(`Hello ${req.body.username} your password : ${req.body.password}`);

  //redirige
  // res.redirect("http://google.com");
});
app.listen(port, () => {
  console.log("serveur port : " + port);
});
