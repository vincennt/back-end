const express = require("express");
const app = express();
const data = require("./translations.json");
const img = require("./public");

const port = 5000;
console.log(data.fr);

const engine = require("express-handlebars").engine;
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.post("/public/:img", (req, res) => {});

app.get("/:lang?", (req, res) => {
  const { lang } = req.params;

  res.render("home", {
    pageTitle: data[lang].pageTitle,
    title: data[lang].title,
    lang,
  });

  console.log(req.params);
  //   const lang = req.params;
  //   const language = res.render("home");
});

app.listen(port, () => {
  console.log("serveur port : " + port);
});
