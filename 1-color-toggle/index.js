const toggleButton = document.querySelector("#toggle-button");
const body = document.querySelector("body");
const heading = document.querySelector("#header");
const attribute = document.querySelector("#attribute");

const Theme = (
  bodyBgColor,
  bodyTextColor,
  themeHeader,
  headerColor,
  toggleButtonColor,
  attributeColor
) => {
  body.style.backgroundColor = bodyBgColor;
  body.style.color = bodyTextColor;
  heading.innerHTML = themeHeader;
  heading.style.color = headerColor;
  toggleButton.style.color = toggleButtonColor;
  attribute.style.color = attributeColor;
};

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("fa-moon");
  if (toggleButton.classList.toggle("fa-sun")) {
    Theme("#fff", "#333", "Light Theme", "#333", "#333", "#333");
  } else {
    Theme("#333", "#fff", "Dark Theme", "#fff", "#fff", "#fff");
  }
});

console.log("hello, world!");