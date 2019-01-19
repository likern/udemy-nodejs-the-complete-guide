const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("In the middleware");
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("Hello from Express.js");
});

app.listen(3000);
