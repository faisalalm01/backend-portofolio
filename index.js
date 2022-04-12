require('dotenv').config({})
const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors')
const mainRoutes = require('./src/routes/')

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use('/', mainRoutes);

app.listen(port, () => {
    console.log(`server run in port:${port}`);
})