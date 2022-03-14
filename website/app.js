/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

//storing my api key and api url
const myApiKey = "71a6b112f43d7bafdd1be3e60eabbb0b";
let weatherApi = `https://api.openweathermap.org/data/2.5/weather?zip=${2112},us&appid=${myApiKey}&units=metric`;

// get the button
let genBtn = document.querySelector("#generate");
//this is for testing only
console.log(genBtn);
// Event listener linked to Generate button
genBtn.addEventListener("click", function() {
    //this is for testing only
    console.log("click");
    //go to the input to take the entered zip code
    let zipCode = document.getElementById("zip").value;
    //this is for testing only
    console.log(zipCode);
    //checking if the user inserted zip code
    if (!zipCode) {
        alert("enter the zip code");
    }
});