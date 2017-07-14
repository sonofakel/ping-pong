// Business Logic -->

// Global Variabes -->
var returnArr = [];

// Count up to 2 from 1 when user inputs 2

var pingPong = function(number) {
  var initalValue = 1;
  if (initalValue < number) {
    for (i = 1; i <= number; i++) {
    returnArr.push("<li>" + i + "</li>");
    initalValue += 1;
    }

    console.log(returnArr.join());
  }
  for (i = 0; 1 < returnArr.length; i++) {
    
  }
  }




// UI Logic -->
$(function(){
  $("#number-input").submit(function(event){
    event.preventDefault();
    var number = $("#number").val();
    $("#output ul").append(pingPong(number));
  });
});
