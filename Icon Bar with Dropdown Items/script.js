//! Links
const jsBtn = document.querySelector("#javascript");
const angularBtn = document.querySelector("#angular");
const reactBtn = document.querySelector("#react");
const htmlBtn = document.querySelector("#html");
const cssBtn = document.querySelector("#css");
const settingsBtn = document.querySelector("#dropdown-toggle");
//! Dropdown Items
const jsList = document.querySelector(".js-list");
const angularList = document.querySelector(".angular-list");
const reactList = document.querySelector(".react-list");
const htmlList = document.querySelector(".html-list");
const cssList = document.querySelector(".css-list");
const settingsList = document.querySelector(".list");
//! Icons
const jsIcon = document.querySelector("#js-icon");
const angularIcon = document.querySelector("#angular-icon");
const reactIcon = document.querySelector("#react-icon");
const htmlIcon = document.querySelector("#html-icon");
const cssIcon = document.querySelector("#css-icon");
const settingsIcon = document.querySelector("#three-dots-icon");
const allMenus = [
  jsList,
  angularList,
  reactList,
  htmlList,
  cssList,
  settingsList,
];
const HandleEvents = (
  btnId,
  dropdownMenu,
  colorClass,
  icon,
  allMenus
) => {
  btnId.addEventListener("click", () => {
    allMenus.forEach((menu) => {
      menu.style.display = "none";
    });
    dropdownMenu.style.display = "block";
    icon.classList.add(colorClass);
  });
};
const ClickOutside = (btnId, dropdownMenu) => {
  window.addEventListener("click", (e) => {
    if (!e.composedPath().includes(btnId)) {
      dropdownMenu.style.display = "none";
    }
  });
};
const js = () => {
  HandleEvents(jsBtn, jsList, "js-color", jsIcon, allMenus);
  ClickOutside(jsBtn, jsList);
};
const angular = () => {
  HandleEvents(
    angularBtn,
    angularList,
    "angular-color",
    angularIcon,
    allMenus
  );
  ClickOutside(angularBtn, angularList);
};
const react = () => {
  HandleEvents(reactBtn, reactList, "react-color", reactIcon, allMenus);
  ClickOutside(reactBtn, reactList);
};
const html = () => {
  HandleEvents(htmlBtn, htmlList, "html-color", htmlIcon, allMenus);
  ClickOutside(htmlBtn, htmlList);
};
const css = () => {
  HandleEvents(cssBtn, cssList, "css-color", cssIcon, allMenus);
  ClickOutside(cssBtn, cssList);
};
const settings = () => {
  HandleEvents(
    settingsBtn,
    settingsList,
    "settings-color",
    settingsIcon,
    allMenus
  );
  ClickOutside(settingsBtn, settingsList);
};
js();
angular();
react();
html();
css();
settings();
