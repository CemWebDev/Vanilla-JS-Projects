const toggleMenuIcon = document.querySelector(".toggle-menu");
const navbar = document.querySelector(".navbar");
toggleMenuIcon.addEventListener("click", () => {
    toggleMenuIcon.classList.toggle("bi-x");
    if (toggleMenuIcon.classList.contains("bi-x")) {
        navbar.style.right = "2rem"
    }
    else {
        navbar.style.right = "100%"
    }
})