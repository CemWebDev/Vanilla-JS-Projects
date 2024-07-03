const container = document.querySelector(".container");
const searchButton = document.querySelector("#search-button");
const inputCity = document.querySelector("#input-city");
const errorBox = document.querySelector(".error");
const weatherContentText = document.querySelector(".weather-content-text");
const content = document.querySelector(".content");
const cityInfo = document.querySelector("#city-info");
const temperatureInfo = document.querySelector("#temperature-info");
const contentBottom = document.querySelector(".content-bottom");
const humidityText = document.querySelector("#humidity");
const windText = document.querySelector("#wind");
const notFoundError = document.querySelector(".not-found");

searchButton.addEventListener("click", () => {
  const cityName = inputCity.value;
  if (cityName.trim() === "") {
    alert("You must write a valid city name.");
    return;
  }
  const API_KEY = "63643e456651f4a59d88479cad249b44";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        container.style.height = "600px";
        errorBox.style.display = "block";
        inputCity.value = "";
        inputCity.disabled = true;
        searchButton.disabled = true;
        content.style.display = "none";
        contentBottom.style.display = "none";
        windText.style.display = "none";
        humidityText.style.display = "none";
        searchButton.classList.add("disabled-search-button");
        return;
      }
      const city = data.name;
      const country = data.sys.country;
      const temp = data.main.temp;
      const windSpeed = data.wind.speed;
      const humidity = data.main.humidity;
      const desc = data.weather[0].description;
      const sunny = document.querySelector("#sunny");
      const rainy = document.querySelector("#rainy");
      const mostlySunny = document.querySelector("#mostly-sunny");
      const snowy = document.querySelector("#snowy");
      container.style.height = "600px";
      content.style.display = "block";
      cityInfo.textContent = `${city}, ${country}`;
      temperatureInfo.textContent = `${temp}`;
      contentBottom.style.display = "block";
      contentBottom.classList.add("flexible-content");
      humidityText.textContent = `Humidity: ${humidity} %`;
      windText.textContent = `Wİnd: ${windSpeed} km/h`;
      errorBox.style.display = "none";
      if (String(desc) == "clear sky") {
        sunny.style.display = "block";
        return;
      }
      if (String(desc) == "shower rain") {
        rainy.style.display = "none";
        return;
      }
      if (String(desc) == "few clouds") {
        mostlySunny.style.display = "block";
        return;
      }
      if (String(desc) == "snow") {
        snowy.style.display = "block";
        return;
      }
    })
    .catch((error) => {
      container.style.height = "600px";
      notFoundError.style.display = "block";
      console.log("Something is wrong", error);
      inputCity.disabled = true;
      searchButton.disabled = true;
      searchButton.classList.add("disabled-search-button");
    });
});
