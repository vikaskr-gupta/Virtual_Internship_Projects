// const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const apiKey = '68a9c0bb67feb5e0c3eb6a5bfdffc72f'; // Replace with your actual API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.getElementById('weather-info');

searchButton.addEventListener('click', () => {
    const cityName = cityInput.value;
    fetch(`${apiUrl}?q=${cityName}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Display weather information for the city
            const city = data.name;
            const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
            const description = data.weather[0].description;

            weatherInfo.innerHTML = `
                <h2>${city}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = 'Error fetching weather data.';
        });
});
