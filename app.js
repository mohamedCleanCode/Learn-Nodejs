const express = require("express");
const app = express();
const port = 5000;

app.set("view engine", "pug");
app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// About page
app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

// 404 not found
app.use((req, res) => {
  res.status(404).send("Sorry can't find that! <a href='/'>home page</a>");
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
