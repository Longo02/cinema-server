const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./configs/routes.js');
const connectDB = require('./configs/db.js');


const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

connectDB();

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})
