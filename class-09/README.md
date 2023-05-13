# Advanced Topics

## Links

-[Replit Object Methods](https://replit.com/@RogerMReyes/Code301n30-class09#index.js)
-[Replit Promises](https://replit.com/@RogerMReyes/301n30-Promises)

## Retros

- Query Parameters - Two Sets
  - First set are between our front end client and backend client
  - Second set are the query parameters required by the API we are using

- Console logs are your best friend, Step through your code

- Async and Await
  - When making any request, the time it takes to get a response can vary
  - Trying to use data before the response get back can lead to bugs so we want to 'await' the data before using it

- next(error) the next function is passed to the next function to pass whatever error was thrown to our error handling middleware

- Thunderclient will count towards any requests made to an API. Be careful when working with API's that have request limits.

- Regex patterns are hard, Yes

## Overview

For this class we will dive a little bit deeper into Express and higher level programming in general, covering the following topics:

- Strategies for Refactoring
- Functional Programming
- Modularization

## Class Outline

- Warm-up exercise
- Review code challenges
- Introduction of the code challenge topic
- Code review of lab assignment
- Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Substandard programming patterns
- Refactoring opportunities
- Efficiency Loss/Gain
- Modularization
- Single Responsibility Principle (SRP)

#### Execute

- Refactor monolithic functions into smaller, single responsibility functions
- Create a "controller" function
- Create DRY code by finding repetition, patterns
- Modularize similar code

## Notes

1. What is DRY code?

1. Why do we modularize our code?

1. What is a Promise?

1. What is the difference between a Promise and using `.then()/.catch()`?

1. `async and await` - vs - `.then() and .catch()`

  ```javaScript
  async function doSomething() {
    try{
      const results = await axios.get(url)
    }
    catch(err){
      console.error(err);
    }
  }

  // error handeling is built in with the .catch() so we don't need a try/catch
  function doSomething() {
    axios
      .get(url)
      .then(results => {
        // the results only exist within this code block
      })
      .catch(err => console.error(err))
  }
  ```

1. Modularizing a file on the server

  ```javaScript
  function doSomething(){
    // does something really cool
  }

  module.exports = doSomething
  ```

  - OR, it can be written like this

  ```javaScript
  module.exports = () => {
    // does something really cool
  }
  ```

  - in the server file

  ```javaScript
  const doSomething = require('./path-to-doSomething');
  // the rest of the file
  ```

1. We can also export more than one function by putting it in an object

  ```javaScript
  module.exports = {
    doSomething: function(){
      // does something cool
    },

    doSomethingElse: function(){
      // does something else
    }
  }
  ```

  - to access a function from the object above in the server, we would...

  ```javaScript
  const doesStuffObject = require('./path-to-doesStuffObject');

  doesStuffObject.doSomething();
  doesStuffObject.doSomethingElse();
  ```

  1. List of resources to help with lab or if I want to know more:
