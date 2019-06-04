$(document).ready(function() {
  $("#blanks form").submit(function() {
    $(".person1").append("blah blah");
    $(".adjective1").append("blah blah");
    $(".verb1").append("blah blah");
    $(".food1").append("blah blah");
    $(".adjective2").append("blah blah");

    $("#story").show();

    event.preventDefault();
  })
})