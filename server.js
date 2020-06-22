// Setup empty JS object to act as endpoint for all routes
projectData = {};
let dataEntries = [];
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
const cors = require('cors');
const { json } = require('body-parser');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

app.post('/newData', (request, response) => {
    const data = request.body;
    if (data) {
        projectData.city = data.name;
        projectData.temperature = data.temperature;
        projectData.date = data.date;
        projectData.feelings = data.feelings;
        dataEntries.push(projectData);
    }
    response.send(JSON.stringify(projectData));
});

const port = 8000;
// Setup Server
function listening() { console.log('Hello world'); }
const server = app.listen(port, () => listening());