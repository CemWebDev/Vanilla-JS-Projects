$(function () {
  $(".icon").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("#second-line").toggleClass("hidden");
  });
});
