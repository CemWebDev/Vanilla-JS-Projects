const displayButton = document.querySelector("#display-button");
const cityName = document.querySelector("#city-name");
const city_country = document.querySelector("#city-country");
const temperature = document.querySelector("#temperature");

const API_KEY = "63643e456651f4a59d88479cad249b44";

displayButton.addEventListener("click", () => {
  const city = cityName.value;
  if (city.length == 0) {
    alert("Please enter a valid city name");
    return;
  }

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const inputCity = data.name;
      const country = data.sys.country;
      const temp = data.main.temp;
      city_country.textContent = `${inputCity}, ${country}`;
      temperature.textContent = `${temp}`;
    })
    .catch((error) => {
      console.error("ERROR", error);
    });
});
