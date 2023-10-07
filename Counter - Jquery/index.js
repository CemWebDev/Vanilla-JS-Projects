$(() => {
  let defaultValue = 0;
  const HandleEvents = (btnId) => {
    if (btnId === "#increment-button") {
      $(btnId).click(function () {
        defaultValue++;
        $("#value-button").text(defaultValue);
      });
    } else if (btnId === "#decrement-button") {
      $(btnId).click(function () {
        defaultValue--;
        $("#value-button").text(defaultValue);
      });
    } else if (btnId === "#value-button") {
      $(btnId).click(function (e) {
        alert("disabled function!");
      });
    } else if (btnId === "#reset-button") {
      $(btnId).click(function (e) {
        defaultValue = 0;
        $("#value-button").text(defaultValue);
      });
    }
  };
  HandleEvents("#increment-button");
  HandleEvents("#decrement-button");
  HandleEvents("#value-button");
  HandleEvents("#reset-button");
});
