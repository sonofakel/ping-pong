// Business Logic -->

// Global Variabes -->
var returnArr = [];

// Count up to 2 from 1 when user inputs 2

var pingPong = function(number) {
  debugger;
  var initalValue = 1;
  if (initalValue < number) {
    for (i = 1; i <= number; i++) {
    returnArr.push(i);
    initalValue += 1;
    }
    console.log(returnArr)
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
