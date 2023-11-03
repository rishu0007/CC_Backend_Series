const express = require('express')
const app = express()

app.set("view engine", "ejs");

app.get('/', function (req, res) {
  res.render("index")
})

app.get('/contact', function(req, res) {
    res.render("contact")
})

app.listen(3000)