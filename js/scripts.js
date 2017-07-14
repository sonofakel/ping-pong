// Business Logic -->

// Global Variabes -->
// returnArr = [];

// Count up to 2 from 1 when user inputs 2

var pingPong = function(number) {
  var initNumber = 1;
  while (initNumber <= number) {
      return (initNumber += 1);
    }
  }




// UI Logic -->
$(function(){
  $("#number-input").submit(function(event){
    event.preventDefault();
    var number = $("#number").val();
    $("#output ul").append("<li>" + pingPong(number) + "</li");
  });
});
