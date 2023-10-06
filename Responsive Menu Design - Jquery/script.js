$(function () {
  const menuToggle = $("#menu-toggle");
  const secondaryList = $(".secondary-list");
  $(menuToggle).click(function () {
    menuToggle.toggleClass("fa-xmark");
    if (menuToggle.hasClass("fa-xmark")) {
      secondaryList.show();
    } else {
      secondaryList.hide();
    }
  });
});
