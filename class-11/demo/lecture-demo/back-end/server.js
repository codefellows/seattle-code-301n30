'use strict' 

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getDogs = require('./Modules/getDogs')

const app = express();

app.use(cors());

const PORT = process.env.PORT;

// Establishing connection with atlas MongoDB with url
mongoose.connect(process.env.MONGODB_URL);

// Assigning connectino to variable to easily access mongoose connection methods
const db = mongoose.connection;

// Listeners to run and show errors if any and message on connection
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Mongoose is connected'));

app.get('/getDogs', getDogs);

app.get('/', (req, res) => res.status(200).send('Default route working'));

app.listen(PORT, ()=> console.log(`listening on ${PORT}`));
