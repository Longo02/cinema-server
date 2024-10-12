const express = require('express');
const router = express.Router();
const app = express()


app.get('/movies/', function(req, res) {
    res.send("hola")
})


app.listen(3000)
