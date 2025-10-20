const apiKey = "88f24935ff722841cfbd9a6a5a0c9664";
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const tempEl = document.querySelector(".temp");
const cityEl = document.querySelector(".city");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const weatherIconEl = document.querySelector(".weather-icon");
const errorEl = document.querySelector(".error");

// Function to fetch weather
async function fetchWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch weather.");
    }

    updateWeather(data);
    showError(""); // clear any error
  } catch (error) {
    showError("Error: " + error.message);
  }
}

// Function to update DOM
function updateWeather(data) {
  const { name } = data;
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  const iconCode = data.weather[0].icon;
  const description = data.weather[0].description;

  cityEl.textContent = name;
  tempEl.textContent = `${Math.round(temp)} °C`;
  humidityEl.textContent = `${humidity}%`;
  windEl.textContent = `${speed} km/h`;
  weatherIconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIconEl.alt = description;
}

// Show error
function showError(message) {
  if (errorEl) {
    errorEl.textContent = message;
  } else {
    alert(message);
  }
}

// Event: Search button
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    showError("Please enter a city name.");
  }
});

// Event: Enter key
cityInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});
