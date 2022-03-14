/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

const myApiKey = "71a6b112f43d7bafdd1be3e60eabbb0b";
let weatherApi = `https://api.openweathermap.org/data/2.5/weather?zip=${2112},us&appid=${myApiKey}&units=metric`;

// Event listener to add function to existing HTML DOM element
let genBtn = document.querySelector("#generate");
console.log(genBtn);
genBtn.addEventListener("click", function() {
    console.log("click");
    //go to the input to take the entered zip code
    let zipCode = document.getElementById("zip").value;
    console.log(zipCode);
});