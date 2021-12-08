const express = require("express");
const app = express();
const data = require("./translations.json");

const port = 5000;
console.log(data.fr);

const engine = require("express-handlebars").engine;
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));

app.get("/:lang?", (req, res) => {
  const { lang } = req.params;
  app.use(express.static("public"));
  if (!data[lang]) {
    res.render("home", {
      pageTitle: data.fr.pageTitle,
      title: data.fr.title,
      lang: "fr",
    });
  } else {
    res.render("home", {
      pageTitle: data[lang].pageTitle,
      title: data[lang].title,
      lang,
    });
  }

  console.log(req.params);
  //   const lang = req.params;
  //   const language = res.render("home");
});

app.listen(port, () => {
  console.log("serveur port : " + port);
});
