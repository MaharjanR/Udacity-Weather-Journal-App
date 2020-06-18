// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));

const port = 8080;
// Setup Server
app.listen(port, () => console.log("hello world, i am a server created using node."));