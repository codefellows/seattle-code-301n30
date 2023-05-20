'use strict'

const mongoose = require('mongoose');

// pulling out Schema from mongoose library
const { Schema } = mongoose;

// Giving structure to our data
const dogSchema = new Schema({
    name: String, 
    color: String,
    longTail: Boolean,
    age: Number,
    location: String
});

// Creating a model passing it the name of the collection and Schema it will adhere to
const dogModel = mongoose.model('Dog', dogSchema);

module.exports = dogModel;