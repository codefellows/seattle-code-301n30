'use strict' 

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dogHandler = require('./Modules/dogHandler')

const app = express();

app.use(cors());
// REQUIRED for req.body, will show undefined without
app.use(express.json());

const PORT = process.env.PORT;

// Establishing connection with atlas MongoDB with url
mongoose.connect(process.env.MONGODB_URL);

// Assigning connectino to variable to easily access mongoose connection methods
const db = mongoose.connection;

// Listeners to run and show errors if any and message on connection
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Mongoose is connected'));


app.get('/', (req, res) => res.status(200).send('Default route working'));

app.get('/dogs', dogHandler.getDogs);

// Write to database route
app.post('/dogs', dogHandler.postDogs);

// Delete document from database
// Params are added after path
app.delete('/dogs/:id', dogHandler.deleteDog);

// Updates document from database
// ID Param add after path
app.put('/dogs/:id', dogHandler.updateDog);


app.listen(PORT, ()=> console.log(`listening on ${PORT}`));
