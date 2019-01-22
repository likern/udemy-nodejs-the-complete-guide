const path = require("path");
const express = require("express");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./util/path");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((request, response) => {
  response.status(404).render("404");
});

app.listen(3000);
