// Setup empty JS object to act as endpoint for all routes
icomingData = {};

// Require Express to run server and routes
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// Start up an instance of app
const app = express();
const port = 3000;
/* Middleware*/
app.get("/", (req, res) => {
    res.send("Hello World!");
});
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder(asking express to use this html files)
app.use(express.static("website"));

//routes
//Post method
app.post("/postData", (req, res) => {
    console.log("data has been arraived");
    const myData = req.body;
    projectData = {
        temp: myData.temp,
        feelings: myData.feelings,
        newDate: myData.newDate,
    };
});
//Get method
app.get("/getData", (req, res) => {
    console.log("data has been sent");
    res.send(icomingData);
});
// Setup Server
app.listen(port, () => {
    console.log(`server is running on port:  ${port}`);
});