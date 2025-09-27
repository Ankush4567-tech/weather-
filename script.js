const apiKey = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid"; 

async function getWeather() {
  const city = document.getElementById("city").value;
  const weatherResult = document.getElementById("weather-result");

  if (!city) {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      weatherResult.innerHTML = "<p>City not found. Try again.</p>";
      return;
    }

    weatherResult.innerHTML 
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = "<p>⚠ Error fetching data. Try again later.</p>";
  }
}
