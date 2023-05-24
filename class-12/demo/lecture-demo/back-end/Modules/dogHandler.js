'use strict'

const Dog = require('../Model/dog');

// Creating object to hold all functions related to the dog model
const dogHandler = {};

dogHandler.getDogs = function (req, res){
    let queryObject = {};

    if(req.query.location){
        queryObject = {location: req.query.location, color: req.query.color}
    }

    Dog.find(queryObject)
        .then(data => res.status(200).send(data))
        .catch(err => console.error(err));
}

dogHandler.postDogs = function (req, res, next){
    const data = req.body;
    Dog.create(data)
        .then(createdDog => res.status(201).send(createdDog))
        .catch(err => next(err));
}

dogHandler.deleteDog = function(req, res, next){
    const {id} = req.params
    Dog.findByIdAndDelete(id)
        .then(deletedDog => res.status(200).send('Dog has been Deleted'))
        .catch(err => next(err));
}

module.exports = dogHandler;