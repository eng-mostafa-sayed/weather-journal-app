/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

//storing my api key and api url
const myApiKey = "71a6b112f43d7bafdd1be3e60eabbb0b";

// get the button element
let genBtn = document.querySelector("#generate");
//this is for testing only
console.log(genBtn);
// Event listener linked to Generate button
genBtn.addEventListener("click", function() {
    //this is for testing only
    console.log("click");
    //go to the inputed zip to take the entered zip code
    let zipCode = document.getElementById("zip").value;
    //this is for testing only
    console.log(zipCode);

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
        console.log("there is zip code");
        let weatherApi = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${myApiKey}&units=metric`;
        console.log(weatherApi);
    }
}); //the end of the event listener