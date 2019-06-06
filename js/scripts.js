$(document).ready(function(){
  $("form#aboutMe").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = parseInt($("select#gender").val());
    var favMusic = parseInt($("radio#favMusic").val());

    event.preventDefault();
  });
});
