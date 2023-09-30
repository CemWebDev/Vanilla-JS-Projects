const toggleBtn = document.querySelector("#toggle-btn");
const body = document.querySelector("body");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput();
})

const validateInput = () => {
    if (nameInput.value.length >= 3) {
        nameInput.classList.add("success");
    } else {
        nameInput.classList.remove("success");
        nameInput.classList.add("error")
    }

    if (email.value.match(emailFormat)) {
        email.classList.add("success");
    } else {
        email.classList.remove("success");
        email.classList.add("error");        
    }


    if (password.value.length >= 8) {
        password.classList.add("success");
    } else {
        password.classList.remove("success");
        password.classList.add("error");
    }
} 


toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("fa-moon");
    if (toggleBtn.classList.contains("fa-moon")) {
        body.style.backgroundColor = "#333";
    }
    else {
        body.style.backgroundColor = "#a2a8d3";
    }
})