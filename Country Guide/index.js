const container = document.querySelector(".container");
const countryNameInput = document.querySelector("#country-input");
const searchButton = document.querySelector("#search-button");
const flag = document.querySelector(".country-flag");
const countryText = document.querySelector(".country-text");

const displayCountry = () => {
    let countryName = countryNameInput.value;
    if (countryName.trim() === "") {
        alert("Search box cannot be empty!");
        return;
    }
    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(url)
    .then(response => {
        if (response.status === 404) {
            alert("404 country not found!");
            return;
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const mainData = data[0];
        flag.innerHTML =  `
        <img src="${mainData.flags.png}" alt="${data[0].flags.alt}" id="flag">
        `;
        countryText.innerHTML = `
        <h3>${mainData.name.common}</h3>
        <span class="capital">Capital: ${mainData.capital[0]}</span><br />
        <span class="continent">Continent: ${mainData.continents[0]}</span><br />   
        <span class="population">Population: ${mainData.population}</span><br />
        `;
    })
    .catch(error => {
        console.log(error);
    })
}

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    displayCountry();
})
