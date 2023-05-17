'use strict' 

function notFound(req, res, next) {
    res.status(404).send('Endpoint not found')
}

module.exports = notFound;