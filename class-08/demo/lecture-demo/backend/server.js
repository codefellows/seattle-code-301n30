'use strict'

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send("Hey your default route is working");
})

app.get('/photos', getPhotos);

async function getPhotos(req, res, next) {
    try {
        const { searchQuery } = req.query;

        const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQuery}`
        const photoResponse = await axios.get(url);
        const formattedData = photoResponse.data.results.map(photo => new Photo(photo))
        res.status(200).send(formattedData)
    }
    catch(error){
        next(error);
    }
}

class Photo {
    constructor(photoObj) {
        this.imgURL = photoObj.urls.regular;
        this.author = photoObj.user.name;
        this.authorLink = photoObj.user.links.html;
    }
}

app.use((error, req, res, next) =>{
    res.status(500).send('Hey we messed up')
})

app.listen(PORT, () => console.log(`listening on ${PORT}`))