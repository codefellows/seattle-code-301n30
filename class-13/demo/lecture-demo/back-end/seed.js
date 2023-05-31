'use strict'

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const Dog = require('./Model/dog');

async function seed(){
    const myDog = new Dog({
        name: 'Luna',
        color: 'Brindle',
        longTail: true,
        age: 8,
        location: 'Tacoma'
    })

    await myDog.save()
        .then(() => console.log('Saved Luna to the DB', typeof myDog))
        .catch(err => console.error(err));

    await Dog.create({
        name: 'Asami',
        color: 'Black',
        longTail: true,
        age: 5,
        location: 'Chicago'
    })
        .then(()=> console.log('Saved Asami to the DB'))
        .catch(err => console.error(err));

    mongoose.disconnect();

}

seed();