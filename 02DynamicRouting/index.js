// /profile/harsh
// /profile/harshita
// /profile/harshit
// /profile/hardik

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get('/profile', (req,res) => {
    res.send("Hello from profile");
})

// dynamic routing
app.get('/profile/:username', (req,res) => {
    res.send(`Hello from ${req.params.username}`);
})

// to make any route dynamic you can use : at the place where
// you want to make it dynamic, and to access there value use req.params
// eg-> /author/books/issued/harsh
//      /author/books/issued/harshita
//      /autor/books/issued/hardik

app.listen(3000)