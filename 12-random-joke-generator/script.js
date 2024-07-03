const jokeText = document.querySelector(".joke-text");
const jokeButton = document.querySelector("#joke-button");
const api = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit";

jokeButton.addEventListener("click", () => {
    fetch(api)
    .then(response => response.json())
    .then(data => {
        if (data.type == "single") {
            jokeText.textContent = data.joke;
        }
        else if (data.type == "twopart") {
            jokeText.textContent = `${data.setup} ${data.delivery}`;
        }
        else {
            jokeText.textContent = "No more jokes"
        }
    })
    .catch(error => {
        console.error("ERROR", error);
    })
})