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
  }
  for (i = 0; i < returnArr; i++) {
     
  }


  // for (i = 0; 1 < returnArr.length; i++) {
  //
  //
  // }
  }




// UI Logic -->
$(function(){
  $("#number-input").submit(function(event){
    event.preventDefault();
    var Orignumber = $("#number").val();
    $("#output ul").text(pingPong(Orignumber));
  });
});
