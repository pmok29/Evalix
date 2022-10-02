const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  const isbn1 = req.query.isbn;
  if (isbn1 == undefined) {
    res.send(`400 bad request: Please check your syntax`);
  }
  let length = isbn1.length;
  if (length != 14 && length != 17) {
    res.send("404 Not found: could not find what you were looking for.");
  }

  const apiKey = "AIzaSyAf3S7w3InFjOXU3ninG0aCSBmts-xqdfE";
  const googleUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn1}&key=${apiKey}`;

  res.redirect(googleUrl);
});

//Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on ${PORT}`);
  }
});
