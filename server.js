// Setup empty JS object to act as endpoint for all routes
icomingData = {};

// Require Express to run server and routes
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// Start up an instance of app
const app = express();
const port = 5500;
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder(asking express to use this html files)
app.use(express.static("website"));

//routes
//Post method
function postDatafun(req, res) {
    // console.log("data has been arraived");
    console.log(req.body);
    const myData = req.body;
    icomingData = {
        temp: myData.temp,
        feelings: myData.feelings,
        newDate: myData.newDate,
    };
}
app.post("/postData", postDatafun);

/////////////////////////////////////////Get method//////////////////////////
function getDatafun(req, res) {
    // console.log("data has been sent");
    res.send(icomingData);
    //make it empty again
    //icomingData = [];
    //console.log("after sent");
}
app.get("/getData", getDatafun);

// Setup Server
app.listen(port, () => {
    console.log(`server is running on port:  ${port}`);
});