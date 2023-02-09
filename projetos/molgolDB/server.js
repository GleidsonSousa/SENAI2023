const  PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const  mongoDB = process.env.DATABASE_URL;
const router = require('./src/routers/router');

const app = express()

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(PORT, () => { console.log("APP ON : " + PORT); })