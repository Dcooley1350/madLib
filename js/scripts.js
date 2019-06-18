$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var datas = ["person1","adjective1","adjective2","food1","verb1"]
      datas.forEach(function(data) {
        var userInput = $("input#" + data).val();
        $("." + data).text(userInput);
      });

    $("#story").show();

    event.preventDefault();
  });
});