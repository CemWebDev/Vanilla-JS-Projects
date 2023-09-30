const flipTheColor = document.querySelector(".flipping-button");
const body = document.querySelector("body");


flipTheColor.addEventListener("click", (e) => {
    e.preventDefault();
    changeTheColor();
})


const changeTheColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = "rgb(" + red + "," + green + "," + blue + ")";
    body.style.backgroundColor = color;
    flipTheColor.style.backgroundColor = color;
}


