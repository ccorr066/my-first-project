$(document).ready(function () {
   $("button").addClass("animated bounce");
});
$(".title-1").click(function () {
   $(".text-1").toggle();
});
$(".title-2").click(function () {
   $(".text-2").toggle();
});
$(".title-3").click(function () {
   $(".text-3").toggle();
});
$("#btnHinge").click(function () {
   $("body").addClass("animated hinge");
});

// this is a change
