const toggleBtn = document.querySelector("#toggle-btn");
const body = document.body;
const header = document.querySelector("h4");

const changeTheme = (bodyBg, buttonBg, buttonColor, headerColor) => {
  body.style.backgroundColor = bodyBg;
  toggleBtn.style.backgroundColor = buttonBg;
  toggleBtn.style.color = buttonColor;
  header.style.color = headerColor;
};

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("bi-sun-fill");
  if (toggleBtn.classList.contains("bi-sun-fill")) {
    changeTheme("#f3f3f3", "#000", "#f3f3f3", "#000");
  } else {
    changeTheme("#000", "#f3f3f3", "#000", "#f3f3f3");
  }
});
