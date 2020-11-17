const imageMapping = {
  Clouds: 'cloudy.png',
  Rain: 'rain.png',
  Snow: 'snow.png',
  Storm: 'storm.png',
  Clear: 'sun.png',
};

async function fetchByCity(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=1fa479876bc53042ee92713ad791ffcc`);

  if (response.status > 299) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

function getValidationDiv() {
  return document.getElementById('validation');
}

function getCityInput() {
  return document.getElementById('city-input');
}

function displayErrorMessage() {
  const validationDiv = getValidationDiv();
  const cityInput = getCityInput();

  cityInput.classList.add('input-error');
  validationDiv.removeAttribute('hidden');
}

function hideErrorMessage() {
  const validationDiv = getValidationDiv();
  const cityInput = getCityInput();

  cityInput.classList.remove('input-error');
  validationDiv.setAttribute('hidden', true);
}

function renderMainWeather({ main, description }) {
  const mainWeather = document.getElementById('main-weather');
  mainWeather.innerHTML = `
    <img src="./img/${imageMapping[main]}" alt="weather-img">
    <div id="weather-description">Current: ${description}</div>
`;
}

function renderMisc(temp, feelsLike, humidityData, speed) {
  const tempActual = document.getElementById('temp-actual');
  const tempFeelsLike = document.getElementById('temp-feels-like');
  const humidity = document.getElementById('humidity');
  const windSpeed = document.getElementById('wind-speed');

  tempActual.innerText = `Temperature: ${temp}`;
  tempFeelsLike.innerText = `Feels Like: ${feelsLike}`;
  humidity.innerText = `Humidity: ${humidityData}`;
  windSpeed.innerText = `Wind: ${speed}`;
}

function renderWeatherData(weatherData) {
  const { main: { temp, feels_like: feelsLike, humidity: humidityData }, weather, wind: { speed } } = weatherData;
  renderMainWeather(weather[0]);
  renderMisc(temp, feelsLike, humidityData, speed);
}

async function handleCityInputSubmit(event) {
  event.preventDefault();
  const city = this.value;
  let weatherData;

  try {
    weatherData = await fetchByCity(city);
    hideErrorMessage();
    renderWeatherData(weatherData);
  }
  catch (error) {
    console.error(error);
    displayErrorMessage();
  }
}

function initEventHandlers() {
  const cityInput = getCityInput();
  cityInput.addEventListener('blur', async function (event) {
    const thisHandleInput = handleCityInputSubmit.bind(this);
    await thisHandleInput(event);
  });

  cityInput.addEventListener('keyup', async function (event) {
    if (event.keyCode === 13) {
      const thisHandleInput = handleCityInputSubmit.bind(this);
      await thisHandleInput(event);
    }
  });
}

function main() {
  initEventHandlers();
}

main();
