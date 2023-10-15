const faqButton = document.querySelector(".faq-button");
const faqModalBox = document.querySelector(".modal-faq");

faqButton.addEventListener("click", () => {
  faqModalBox.style.opacity = "1";
  faqModalBox.style.visibility = "visible";
});

window.addEventListener("click", (e) => {
  if (
    !e.composedPath().includes(faqButton) &&
    !e.composedPath().includes(faqModalBox)
  ) {
    faqModalBox.style.opacity = "0";
    faqModalBox.style.visibility = "hidden";
  }
});
