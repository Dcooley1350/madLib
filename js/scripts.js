$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var adjective1Input = $("input#adjective1").val();
    var verb1Input = $("input#verb1").val();
    var food1Input = $("input#food1").val();
    var adjective2Input = $("input#adjective2").val();

    $(".person1").text(person1Input);
    $(".adjective1").text(adjective1Input);
    $(".verb1").text(verb1Input);
    $(".food1").text(food1Input);
    $(".adjective2").text(adjective2Input);

    $("#story").show();

    event.preventDefault();
  });
});