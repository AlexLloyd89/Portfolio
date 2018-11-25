$(document).ready(function() {
  //Toggle hero image text display on menu click
  $("#menuToggle input").on("click", function() {
    $(".contain:visible").fadeOut("fast");
    $(".contain:hidden").fadeIn("slow");
  });
});
