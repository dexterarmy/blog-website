const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/blog", (req, res, next) => {
  res.render("blog");
});

module.exports = app;
