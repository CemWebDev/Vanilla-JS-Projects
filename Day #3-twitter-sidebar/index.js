const tooltipMenuBtn = document.querySelector("#open-tooltip-menu");
const tooltipMenu = document.querySelector(".tooltip-menu");

const toggleMenu = () => {
  tooltipMenu.classList.toggle("visible");
};
const handleEvents = () => {
  tooltipMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });
  window.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(tooltipMenu) &&
      !e.composedPath().includes(tooltipMenuBtn)
    ) {
      tooltipMenu.classList.remove("visible");
    }
  });
};
handleEvents();
