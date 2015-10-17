$(document).ready(function() {
  $("button.btn").click(function() {
    var lyrics = "";
    for (var index = 99; index >= 1; index -= 1) {
      var lyrics = lyrics.concat(index + " bottles of beer on the wall,<br>" + index + " bottles of beer!<br> Take one down,<br>Pass it around,<br>" + (index-1) + " bottles of beer on the wall!<br><br>");
    }
    $("p").after(lyrics);
  });
});
