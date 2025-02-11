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


function updateCurrentWeather(data) {
    const { name, sys, main, weather, dt } = data;

    locationDisplay.innerHTML = `${sys.country} <br> ${name}`;
    tempDisplay.innerHTML = `${Math.round(main.temp)}°`;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    weatherIcon.src = iconUrl;
    const currentDate = new Date(dt * 1000);
    updateDateTime(currentDate);
}

function updateDateTime(date) {
    const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const currentDate = date.getDate();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    timeDisplay.innerHTML = `${hours}:${minutes} PM`;
    dateDisplay.innerHTML = `${day} <br> ${currentDate} ${month}`;
}