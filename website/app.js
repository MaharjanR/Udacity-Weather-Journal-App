/* Global Variables */
const apiKey = '28465ad65f0da40dc1008729930cf40a';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=676101,in&appid=';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

//querying elements from the Dom.
const submitBtn = document.getElementById('generate');
const zipText = document.getElementById("zip");
const feelingsText = document.getElementById('feelings');

//getting weatherinfo - using a fetch call to openWeatherMap
const weatherInfo = async zip => await fetch(baseUrl + apiKey);


submitBtn.addEventListener('change', async() => {
    const zip = zipText.value;
})