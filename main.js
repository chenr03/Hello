console.log("Hello");

// let done = false;
//
// while(!done){
//     /// comment
// }
//
// console.log("I am done");
//
// /**
// *** variables
// *** loops
// *** conditionals
// *** functions
// *** objects
// *** arrays
// *** callbacks
// ****/


// console.log("Loading main.js");

//bringing in the top level function provided by the express framework
let express = require('express');

// this is creating our application object
let app = express();

// this is creating a number for my PORT
let PORT = 8080;

//for any get request, where the route is "/hello",
//send the string "Sup Biotch" on the response
app.get('/hello', function(request, response){
    response.send("Sup Biotch!")
})

//this route should return the string of the form
// 'Hello There :name"
app.get('/hello/:name', function(request, response){
    let name = request.params.name;
    let message = (`Hello there ${name}`)
    response.send(message);
})

//INSTRUCTIONS for HOMEWORK =>
//write a GET route definition that will do the following:

// request url = /bye?name=mike  => 'see ya later mike';
// request url = /bye?name=bob => 'see ya later bob';
// request url = /bye => "see ya later"

// hint you get the query parameters using : request.query.name

// get using query parameter
app.get("/bye", function(request, response){
    // variables to query in browser under listening port 8080:
    let name = request.query.name;
    let age = request.query.age;
    let location = request.query.location;

    // if query by name localhost:8080/bye?name=('place name here')
    if (name) {
        response.send( `see ya later: ${name}`)
        // else if query by age localhost:8080/bye?age=('place age here')
        // prints see ya later (name) in browser
    } else if (age) {
        response.send(`your age is: ${age}`)
        // else if query by location localhost:8080/bye?location=('place location here')
        // prints your age is: (age) in browser
    } else if (location) {
        response.send(`your location is: ${location}`);
        // else query by name localhost:8080/bye
        // prints your location is: (location) in browser
    } else {
        response.send(`see ya later`);
        // prints see ya later in browser
    }
})

// get using path parameter
app.get('/bye/:name', function(request, response){
    let value = request.params.name;
    let message = (`see ya later: ${value} `)
    response.send(message);

})



// This is my function that the app is listening to
// (this is a callback function) - how to do the instructions
// - basically a function within a function
app.listen(PORT, function(){
    console.log('Application started and listening on port', PORT);
})


//request.query.name
//request.query.id




