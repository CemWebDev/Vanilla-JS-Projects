const checkInput = document.querySelector("#check-button");
const addTask = document.querySelector("#add-task");
const deleteTask = document.querySelector("#delete-task");
const task = document.querySelector("#task-value");
const successText = document.querySelector("#success-text");
const errorText = document.querySelector("#error-text");

const CheckFunction = () => {
  checkInput.addEventListener("click", (e) => {
    e.preventDefault();
    check();
  });

  const check = () => {
    const taskValue = task.value;
    if (taskValue.trim().length === 0) {
      updateValidationMessage(successText, errorText, "You must write a task!");
      disableButtons(addTask, deleteTask);
    } else {
      updateValidationMessage(successText, errorText, "Valid Task!");
      enableButtons(addTask, deleteTask);
    }
  };

  const updateValidationMessage = (successText, errorText, message) => {
    if (message === "You must write a task") {
      successText.innerHTML = "";
      errorText.innerHTML = message;
    } else {
      errorText.innerHTML = "";
      successText.innerHTML = message;
    }
  };

  const disableButtons = (...buttons) => {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  };
  const enableButtons = (...buttons) => {
    buttons.forEach((button) => {
      button.disabled = false;
    });
  };
};

const AddFunction = () => {
  addTask.addEventListener("click", (e) => {
    e.preventDefault();
    add();
  });

  const add = () => {
    const taskValue = task.value;
    if (taskValue.trim().length === 0) {
      errorText.innerHTML = "You must write a task!";
    } else {
      successText.innerHTML = "";
      errorText.innerHTML = "";
      const newTask = document.createElement("p");
      const parent = document.querySelector("#tasks");
      parent.appendChild(newTask);
      newTask.style.position = "relative";
      newTask.innerHTML = taskValue;
      newTask.addEventListener("click", () => {
        newTask.style.display = "none"
      })
      deleteTask.addEventListener("click", (e) => {
        e.preventDefault();
        clear();
      })
      const clear = () => {
        newTask.style.display = "none"
      }
    }
    task.value = "";
  };
};

CheckFunction();
AddFunction();
