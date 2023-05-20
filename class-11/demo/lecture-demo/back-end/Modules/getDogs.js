'use strict'

const Dog = require('../Model/dog');

function getDogs(req, res){
    let queryObject = {};

    if(req.query.location){
        queryObject = {location: req.query.location}
    }

    Dog.find(queryObject)
        .then(data => res.status(200).send(data))
        .catch(err => console.error(err));
}

module.exports = getDogs;