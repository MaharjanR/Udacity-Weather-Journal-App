/* Global Variables */
const apiKey = '28465ad65f0da40dc1008729930cf40a';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

//querying elements from the Dom.
const submitBtn = document.getElementById('generate');
const zipText = document.getElementById("zip");
const feelingsText = document.getElementById('feelings');

//getting weatherinfo - using a fetch call to openWeatherMap
const weatherInfo = async zip => await fetch(`${baseUrl}${zip}&appid=${apiKey}`);

submitBtn.addEventListener('click', async() => {
    submitBtn.textContent = 'Generating...';
    const zip = zipText.value;
    const feelings = feelingsText.value;
    const response = await weatherInfo(zip);
    console.log(response.json())
    submitBtn.textContent = 'Generate';

})