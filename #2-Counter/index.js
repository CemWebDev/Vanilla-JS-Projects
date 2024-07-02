const incrementButton = document.querySelector(".increment-button");
const decrementButton = document.querySelector(".decrement-button");
const counterValue = document.querySelector(".counter-value");
const resetButton = document.querySelector(".reset-button");
let defaultValue = 0;

const handleEvent = (button) => {
  button.addEventListener("click", () => {
    if (button === incrementButton) {
      defaultValue++;
    } else if (button === decrementButton) {
      defaultValue--;
    } else if (button === resetButton) {
      defaultValue = 0;
    }
    counterValue.textContent = defaultValue;
  });
};

handleEvent(incrementButton);
handleEvent(decrementButton);
handleEvent(resetButton);

counterValue.addEventListener("click", () => {
  alert("Disabled Function!");
});
