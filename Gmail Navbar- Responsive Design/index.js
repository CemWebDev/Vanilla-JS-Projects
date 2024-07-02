const faqButton = document.querySelector(".faq-button");
const faqModalBox = document.querySelector(".modal-faq");

faqButton.addEventListener("click", () => {
  faqModalBox.classList.add("visible");
});

window.addEventListener("click", (e) => {
  if (
    !e.composedPath().includes(faqButton) &&
    !e.composedPath().includes(faqModalBox)
  ) {
    faqModalBox.classList.remove("visible");
  }
});
