import { colors } from "./colors.js";

const changeColorBtn = document.querySelector(".change-color");
const errorButton = document.querySelector(".color-info");
const header = document.querySelector(".header");
const colorText = document.querySelector(".color-text");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeTheColor();
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

const changeTheColor = () => {
  const randomNumber = getRandomNumber();
  body.style.backgroundColor = colors[randomNumber];
  colorText.textContent = colors[randomNumber];
  errorButton.addEventListener("mouseover", () => {
    errorButton.classList.add("error-style");
    header.textContent = "";
    colorText.textContent = "Shut down the system!";
  });
  errorButton.addEventListener("mouseleave", () => {
    errorButton.classList.remove("error-style");
    header.textContent = "Background Color: ";
    colorText.textContent = colors[randomNumber];
  });
  errorButton.addEventListener("click", () => {
    body.style.display = "none";
  });
};
