'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const shoppingListData = require('./data/shoppinglist.json')

// initilizing express
const app = express();

// middleware to allow open access with cors
app.use(cors())

const PORT = process.env.PORT;

app.get('/', (request, response) => {
    response.status(200).send('Hey your default route is working')
});

//http://localhost:3001/shoppingList
//http://render-app-name/shoppingList
app.get('/shoppingList', (request, response, next) => {

    try {
        const { listType } = request.query
        if (listType === 'supplies') {
            const formattedData = shoppingListData.lists[0].items.map(obj => new List(obj))
            response.status(200).send(formattedData);
        }
        else if (listType === 'food') {
            const formattedData = shoppingListData.lists[1].items.map(obj => new List(obj))
            response.status(200).send(formattedData);
        }
    }
    catch (error) {
        next(error);
    }

});

class List {
    constructor(obj) {
        this.name = obj.name;
        this.description = obj.description
    }
}

app.get('*', (req, res) => {
    res.status(404).send('Not found')
});

app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));