/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let tmpp = NaN;
let newDate = 1 + d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

//storing my api key and api url
const myApiKey = "71a6b112f43d7bafdd1be3e60eabbb0b";

// get the button element
let genBtn = document.querySelector("#generate");
//this is for testing only
//console.log(genBtn);
// Event listener linked to Generate button
genBtn.addEventListener("click", async function() {
    //this is for testing only
    //console.log("click");
    //go to the inputed zip to take the entered zip code
    let zipCode = document.getElementById("zip").value;
    //this is for testing only
    //console.log(zipCode);

    //this section for checking if the user inserted zip code
    //here check if it empty
    if (!zipCode) {
        alert("enter the zip code");
    }

    //here check if it number not string(string not valid btw)
    else if (!Number(zipCode)) {
        alert("zip code must be numeric");
    }
    //here it is not abuse or empty
    else {
        if (zipCode.length != 5) {
            alert("invalid  zip code");
        } else {
            //chain promises
            GetWeatherData(zipCode);
            postDataFun("http://localhost:5500/postData", {
                //getting the temp value from the api
                temp: tmpp,
                // getting the value from the textarea
                feelings: document.querySelector("#feelings").value,
                newDate: newDate,
            });
            document.getElementById("temp").innerHTML =
                "Temprature is: " + Math.round(tmpp) + " degree";
            my_UI_Updater();
        }
    }
}); //the end of the event listener

const GetWeatherData = async(zipCode) => {
    //this is for testing only
    //console.log("there is zip code");
    //this is my api now
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${myApiKey}&units=metric`;
    //this is for testing only
    //console.log(weatherApi);
    //fetching from the server
    //await used to whait for response
    const resp = await fetch(weatherApi);
    //convert it to JSON format
    const data = await resp.json();
    //storing the tempreature
    tmpp = data.main.temp;
    //this is for testing only
    console.log("temp is:" + tmpp);
    //this is for testing only
    // console.log("response is:\n");
    //console.log(data);
};

//////////////////////////////////////////////////////////////////post data////////////////////////////////////////////////
const postDataFun = async(url = "", data = {}) => {
    //this is for testing only
    //console.log("inside post data");
    await fetch("/postData", {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        // if there were any error then catch an error
        console.log("Error Occured:" + err);
    }
};

/////////////////////////////////////////////////updating my user interface elements using async func////////////////////////////
const my_UI_Updater = async() => {
    //waiting for fetch
    const reqs = await fetch("http://localhost:5500/getData");
    //convert it to JSON format

    try {
        //trying to edit the ui element's content(its inner HTML)
        const myAllData = await reqs.json();
        document.getElementById("temp").innerHTML =
            "Temprature is: " + Math.round(myAllData.temp) + " degree";
        document.getElementById("content").innerHTML =
            "Feels: " + myAllData.feelings;
        document.getElementById("date").innerHTML = "Date: " + myAllData.newDate;
        //this is for testing only
        console.log(date, content, temp);
    } catch (err) {
        // if there were any error then catch an error
        console.log("Error Occured:" + err);
    }
};