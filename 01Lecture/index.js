const express = require('express')
require('dotenv').config()
const app = express()

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/twitter', (req,res) => {
    res.send("hello rishu");
})

app.get('/login', (req,res) => {
    res.send('<h1> I love Vanshika </h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`)
})