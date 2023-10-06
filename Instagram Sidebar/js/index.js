const menuIcon = document.querySelector(".menu-icon  i");
const menuIconText = document.querySelector(".menu-icon span");
const detailsMenu = document.querySelector(".addition-menu");
const changeThemeBtn = document.querySelector("#change-theme");
const changeThemeBox = document.querySelector(".theme-toggle-box");
const closeChangeThemeBox = document.querySelector("#x-mark");
const backIcon = document.querySelector("#back-mark");
const changeThemeToggleBtn = document.querySelector("#toggle");
const body = document.querySelector("body");
const sidebarLinks = document.querySelectorAll(".sidebar-list a");
const instagramLogo = document.querySelector("#instagram-header");


const ToggleMenuFunc = (toggleName, opacity, visibility) => {
  toggleName.style.opacity = opacity;
  toggleName.style.visibility = visibility;
};

const Theme = (bodyBgColor, logoColor, iconColor, textColor) => {
  body.style.backgroundColor = bodyBgColor; 
  instagramLogo.style.color = logoColor;
  menuIcon.style.color = iconColor;
  menuIconText.style.color = textColor;
}

const baseMenuFunc = () => {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    if (menuIcon.classList.contains("active")) {
      ToggleMenuFunc(detailsMenu, "1", "visible");
    } else {
      ToggleMenuFunc(detailsMenu, "0", "hidden");
    }
  });
  window.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      !e.composedPath().includes(menuIcon) &&
      !e.composedPath().includes(detailsMenu) &&
      !e.composedPath().includes(backIcon)
    ) {
      ToggleMenuFunc(detailsMenu, "0", "hidden");
      if (
        detailsMenu.style.opacity == "0" &&
        detailsMenu.style.visibility == "hidden"
      ) {
        menuIcon.classList.remove("active");
      }
    }
  });
};

const changeTheme = () => {
  changeThemeBtn.addEventListener("click", () => {
    ToggleMenuFunc(detailsMenu, "0", "hidden");
    ToggleMenuFunc(changeThemeBox, "1", "visible");
  });
  closeChangeThemeBox.addEventListener("click", () => {
    ToggleMenuFunc(changeThemeBox, "0", "hidden");
  });
  window.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(closeChangeThemeBox) &&
      !e.composedPath().includes(changeThemeBox) &&
      !e.composedPath().includes(changeThemeBtn) 
    ) {
      ToggleMenuFunc(changeThemeBox, "0", "hidden");
    }
  });
  changeThemeToggleBtn.addEventListener("click", () => {
    changeThemeToggleBtn.classList.toggle("bxs-toggle-left");
    if (changeThemeToggleBtn.classList.contains("bxs-toggle-left")) {
      Theme("#fff", "#000", "#000", "#000");
      Array.from(sidebarLinks).forEach(links => {
        links.style.color = "#000"
      })
    }
    else {
      Theme("#000", "#fff", "#fff", "#fff");
      Array.from(sidebarLinks).forEach(links => {
        links.style.color = "#fff";
      })
    }
  });
};

const goBackFunc = () => {
  backIcon.addEventListener("click", () => {
    ToggleMenuFunc(changeThemeBox, "0", "hidden");
    ToggleMenuFunc(detailsMenu, "1", "visible");
  });
};

baseMenuFunc();
changeTheme();
goBackFunc();
