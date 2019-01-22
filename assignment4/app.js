const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser')

const users = [];

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render('root.ejs', { pageTitle: "Enter user name" })
});

app.post('/add-user', (req, res) => {
  console.log(req.body)
  users.push(req.body.username)
  res.redirect('/')
})



app.get("/users", (req, res) => {
  res.render('users', { users: users, pageTitle: "Users" })
});

app.use((req, res) => {
  res.status(404).render('404', { pageTitle: "Enter user name" })
});

const server = http.createServer(app);
server.listen(3000);
