'use strict'

const axios = require('axios');
const cache = require('./cache')

function getRecipe(req, res, next) {
  const { ingredient } = req.query;
  const url = `https://api.edamam.com/api/recipes/v2?app_id=${process.env.RECIPE_APP_ID}&app_key=${process.env.RECIPE_APP_KEY}&q=${ingredient}&type=public`

  const key = 'recipe' + ingredient

  console.log(cache)

  // Time stamp expression is checking if the timestamp exceeds 1 minute in milliseconds
  if(cache[key] && (Date.now() - cache[key].timestamp < 60000)){
    console.log('cache hit - sending data from cache');
    res.status(200).send(cache[key].data)
  }
  else{
    console.log('cache miss - making a new request to the API')
    axios.get(url)
      .then(response => response.data.hits.map(dish => new Recipe(dish.recipe)))
      .then(formattedData => {
        cache[key] = {};
        cache[key].data = formattedData;
        cache[key].timestamp = Date.now();
        // console.log(cache[key].data);
        res.status(200).send(formattedData)
      })
      .catch(err => next(err));
  }
  
}

class Recipe {
  constructor(recipe) {
    this.uri = recipe.uri;
    this.label = recipe.label;
    this.image_url = recipe.image;
    this.ingredients = recipe.ingredientLines;
    this.totalTime = recipe.totalTime;
  }
}

module.exports = getRecipe;