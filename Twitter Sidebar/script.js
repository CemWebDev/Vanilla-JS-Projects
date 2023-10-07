const tooltipMenuBtn = document.querySelector("#tooltip-menu-toggle");
const tooltipMenu = document.querySelector(".tooltip-menu");

const ToggleMenu = (opacity, visibility) => {
  tooltipMenu.style.opacity = opacity;
  tooltipMenu.style.visibility = visibility;
};

const HandleEvents = () => {
  tooltipMenuBtn.addEventListener("click", () => {
    ToggleMenu("1", "visible");
  });
  window.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(tooltipMenuBtn) &&
      !e.composedPath().includes(tooltipMenu)
    ) {
      ToggleMenu("0", "hidden");
    }
  });
};

HandleEvents();
