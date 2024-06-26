const tooltipMenuBtn = document.querySelector("#open-tooltip-menu");
const tooltipMenu = document.querySelector(".tooltip-menu");

const toggleMenu = (opacity, visibility) => {
  tooltipMenu.style.opacity = opacity;
  tooltipMenu.style.visibility = visibility;
};

const handleEvents = () => {
  tooltipMenuBtn.addEventListener("click", () => {
    toggleMenu("1", "visible");
  });
  window.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(tooltipMenuBtn) &&
      !e.composedPath().includes(tooltipMenu)
    ) {
      toggleMenu("0", "hidden");
    }
  });
};

handleEvents();
