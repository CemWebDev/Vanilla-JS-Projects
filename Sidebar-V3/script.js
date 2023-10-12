$(function () {
  $("#theme-toggle-button").click(function () {
    $(this).toggleClass("bi-moon bi-brightness-high-fill");
    if ($(this).hasClass("bi-brightness-high-fill")) {
      $("body").css({
        "background-color": "#333",
      });
    } else {
      $("body").css({
        "background-color": "#f7f7f7",
      });
    }
  });
});
