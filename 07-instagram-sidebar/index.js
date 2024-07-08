const moreModalIcon = document.querySelector(".more i");
const moreModalBox = document.querySelector(".more-modal-box");
const changeThemeBtn = document.querySelector("#change-theme");

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
  alert("n");
});
