$(() => {
  $("#color-button").click(() => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = "rgb(" + red + "," + green + "," + blue + ")";
    const textForm = `rgb(${red}, ${green}, ${blue})`;
    $("body").css({
      "background-color": color,
    });
    $(".rgb-color").text(textForm);
    if (red === 255 && green === 0 && blue === 0) {
      $("#color-info").css({
        "background-color": "black",
        color: "red",
      });
      $("#color-button").css({
        "background-color": "black",
        color: "red",
      });
    }
    if (red === 0 && green === 0 && blue === 0) {
      $(".attribute").css({
        color: "white",
      });
      $("#my-link").css({
        color: "white",
      });
    } else {
      $("#color-info").css({
        "background-color": color,
        border: "2px solid black",
      });
      $("#color-button").css({
        "background-color": color,
        border: "2px solid black",
      });
    }
    $("#color-info").mouseover(() => {
      $("#color-info").addClass("shutting-down");
      $("#color-info").text("Shut down the system");
    });
    $("#color-info").mouseleave(() => {
      $("#color-info").removeClass("shutting-down");
      $("#color-info").text("Background Color: " + textForm);
    });
    $("#color-info").click(() => {
      $(".container").css({
        display: "none",
      });
      $("body").css({
        "background-color": "black",
      });
      $("body").text("Game Over.").css({
        color: "white",
        "font-size": "20px",
      });
    });
  });
});
