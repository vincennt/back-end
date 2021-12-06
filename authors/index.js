// const  axios  = require("axios");
const express = require("express");
const app = express();

const port = 5000;

var authors = [
  {
    name: "Lawrence Nowell",
    nationality: "UK",
    books: ["Beowulf"],
  },
  {
    name: "William Shakespeare",
    nationality: "UK",
    books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
  },
  {
    name: "Charles Dickens",
    nationality: "US",
    books: ["Oliver Twist", "A Christmas Carol"],
  },
  {
    name: "Oscar Wilde",
    nationality: "UK",
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
  },
];

app.get("/", (req, res) => {
  res.send("Authors API");
});

app.get("/authors/:id", (req, res) => {
  const { id } = req.params;
  const author = authors[id - 1];
  res.send(author.name + "," + "&nbsp" + author.nationality);
});
app.get("/authors/:id/books", (req, res) => {
  const { id } = req.params;
  const author = authors[id - 1];
  res.send(author.books.join(" , "));
});
app.get("/json/authors/:id", (req, res) => {
  const { id } = req.params;
  const author = authors[id - 1];
  res.json({ name: author.name, nationality: author.nationality });
});
app.get("/json/authors/:id/books", (req, res) => {
  const { id } = req.params;
  const author = authors[id - 1];
  res.json({ books: author.books });
});
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
