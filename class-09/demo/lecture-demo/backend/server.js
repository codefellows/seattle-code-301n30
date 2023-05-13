'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const getJobs = require('./modules/jobs');
const notFound = require('./modules/notFound')

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/jobs', getJobs);
app.use('*', notFound);

app.use((err, req, res) => res.status(500).send(err))

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});