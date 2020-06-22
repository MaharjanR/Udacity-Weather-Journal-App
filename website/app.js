/* Global Variables */
const apiKey = '28465ad65f0da40dc1008729930cf40a';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
let data;

//querying elements from the Dom.
const submitBtn = document.getElementById('generate');
const zipText = document.getElementById("zip");
const feelingsText = document.getElementById('feelings');
const date = document.querySelector('#date');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');
const content = document.querySelector('#content');


//getting weatherinfo - using a fetch call to openWeatherMap
const weatherInfo = async zip => await fetch(`${baseUrl+zip},us&appid=${apiKey}`);

//function to post to the server
const postData = async(url, weatherInfo) => {
    const response = await fetch(url, {
        method: 'Post',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(weatherInfo)
    });
    try {
        const newData = await response.json();
        return newData;

    } catch (error) {
        console.log('error:', error);
    }
}
//Function to get the recent ProjectData from the server
const getData = async(url) => {
    const response = await fetch('getData');

    try {
        const data = await response.json();
        updateUI(data);
    } catch (error) {
        console.log('error', error);
    }
}
submitBtn.addEventListener('click', async() => {
    
    //Getting user responses from the website
    submitBtn.textContent = 'Generating...';
    const zip = zipText.value;
    const feelings = feelingsText.value;
    
    //Calling weatherInfo function to get WeatherData from OpenWeatherMap
    const response = await weatherInfo(zip);
    const res = await response.json();
    
    //Assigning data recieved from Openweather Map to variables
    const temp = res.main.temp.toString() + '°C';
    const city = res.name.toString();
    const dataset = { name: city, temperature: temp, date: newDate, feelings: feelings };
    
    //Posting the data to the server
    data = await postData('/newData', dataset);
    
    //Making a get request to the server to get the recent Project Data
    getData('getAll');
    submitBtn.textContent = 'Generate';
});

//function to update UI
function updateUI(data) {
    date.textContent = data.date;
    city.textContent = data.city;
    temp.textContent = data.temperature;
    content.textContent = data.feelings;
}
