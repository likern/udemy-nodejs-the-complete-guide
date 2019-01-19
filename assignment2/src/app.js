const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("First middleware function");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware function");
  res.send("<h1>Hello from Express.js!</h1>");
});

app.listen(3000);
