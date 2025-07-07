import express from 'express';
import bodyParser from 'body-parser'; //this allows to take in incoming POST request body

const app = express(); //initialize express application "now app has it all"
const PORT = 5000;

app.use(bodyParser.json());// initialize bodyparser middleware, .json() because we willbe using json in our whole application "it is a common format for sending and requesting through REST API"

//create first route, takes two parameter "path and a callback (the callback again takes two para "req, res")", and here we made a get requestes to a "/" that will be our home, browsers can only make get req
app.get('/', (req, res)=>{res.send("Hello from home page")
});

// TODO:
// Create 5 RESTful routes for user resource:
// - GET     /users          → Get all users
// - POST    /users          → Create a new user
// - GET     /users/:id      → Get a single user by ID
// - DELETE  /users/:id      → Delete a user by ID
// - PATCH   /users/:id      → Update a user by ID


//make our application listen for incoming req by .listen, and specify port that we want to listen on , has a callback funciton that executes once we run the server
app.listen(PORT, ()=>console.log(`Server runnig on port: http://localhost:${PORT}`));

