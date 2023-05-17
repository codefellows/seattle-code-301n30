'use strict' 

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const notFound = require('./modules/notFound');
const getRecipe = require('./modules/getRecipe')

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => res.status(200).send('Default route working'));
app.get('/recipes', getRecipe);
app.get('*', notFound);

app.use((err, req, res) => {
    res.status(500).send(err);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`))