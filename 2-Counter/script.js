const incrementButton = document.querySelector(".increment-button");
const decrementButton = document.querySelector(".decrement-button");
const counterValue = document.querySelector(".counter-value");
const resetButton = document.querySelector(".reset-button");
let defaultValue = 0;


const HandleEvents = (buttonId) => {
  buttonId.addEventListener("click", () => {
    if (buttonId == incrementButton) {
        defaultValue++;
    }
    else if (buttonId == decrementButton) {
        defaultValue--;
    }
    else if (buttonId == resetButton) {
        defaultValue = 0;
    } 
    counterValue.textContent = defaultValue;
  });
};

HandleEvents(incrementButton);
HandleEvents(decrementButton);
HandleEvents(resetButton);

counterValue.addEventListener("click", () => {
    alert("Disabled Function!")
})
