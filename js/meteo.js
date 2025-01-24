
const apiKey = "07d05b7536c6cd0877e496a495b8ef12"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";


const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");
const locationDisplay = document.querySelector(".time-location p");
const timeDisplay = document.querySelector(".time-location h1");
const dateDisplay = document.querySelector(".time-location strong p");
const tempDisplay = document.querySelector(".temp h1");
const weatherDescription = document.querySelector(".temp h2");
const weatherIcon = document.querySelector(".weather-icon img");
const forecastElements = document.querySelectorAll(".forecast");


async function fetchWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=fr`);
        if (!response.ok) {
            throw new Error("Ville introuvable");
        }
        const weatherData = await response.json();

        
        updateCurrentWeather(weatherData);
    } catch (error) {
        alert(error.message);
    }
}


