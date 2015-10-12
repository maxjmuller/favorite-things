$(document).ready(function(){
  $('#blanks form').submit(function(event){
    var cityInput = $('input#city').val();
    var exerciseInput = $('input#exercise').val();
    var weekendInput = $('input#weekend').val();
    var bookInput = $('input#book').val();
    var foodInput = $('input#food').val();
    var colorInput = $('input#color').val();

    $('.city').text(cityInput);
    $('.exercise').text(exerciseInput);
    $('.weekend').text(weekendInput);
    $('.book').text(bookInput);
    $('.food').text(foodInput);
    $('.color').text(colorInput);

    $('#list').show();

    event.preventDefault();
  });
});
