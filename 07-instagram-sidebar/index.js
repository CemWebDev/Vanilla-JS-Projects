const moreModalIcon = document.querySelector(".more i");
const moreModalBox = document.querySelector(".more-modal-box");
const changeThemeBtn = document.querySelector("#change-theme");
const changeThemeBox = document.querySelector(".change-theme-box");
const closeChangeThemeBox = document.querySelector("#close-change-theme-box");
const toggleBtn = document.querySelector(".toggle-btn");

moreModalIcon.addEventListener("click", () => {
  moreModalBox.classList.toggle("visible");
});
window.addEventListener("click", (e) => {
  if (
    !e.composedPath().includes(moreModalIcon) &&
    !e.composedPath().includes(moreModalBox)
  ) {
    moreModalBox.classList.remove("visible");
  }
});

changeThemeBtn.addEventListener("click", () => {
  moreModalBox.classList.remove("visible");
  changeThemeBox.classList.add("visible");
});

closeChangeThemeBox.addEventListener("click", () => {
  changeThemeBox.classList.remove("visible");
});

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("bi-toggle2-off");
});
