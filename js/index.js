const item = $("#para2");
$("button").on("click", function () {
  item.remove();
});

$("#1").on("click", function () {
  $("#instructions1").slideToggle("slow");
});
$("#2").on("click", function () {
  $("#instructions2").slideToggle("slow");
});

$(".subHeader").css({
  "background-color": "#979e95",
  color: "#4b6143",
});

$(document).ready(function () {
  $(".image").css("opacity", 0.6);

  $(".image").on({
    mouseenter: function () {
      $(this).css("opacity", 1);
    },

    mouseleave: function () {
      $(this).css("opacity", 0.08);
    },
  });
});
