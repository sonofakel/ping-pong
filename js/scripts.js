// Business Logic -->

// Global Variabes -->
var returnArr = [];

// Count up to 2 from 1 when user inputs 2

var pingPong = function(number) {

  var initalValue = 1;
  if (initalValue < number) {
    for (i = 1; i <= number; i++) {
      returnArr.push(i);
      initalValue += 1;
    }
  }
  for (i = 0; i < returnArr.length; i++) {
  debugger;
    if (returnArr[i] % 15 === 0) {
       returnArr[i] = "pingpong";
    } else if (returnArr[i] % 3 === 0 ) {
      returnArr[i] = "ping";
    } else if (returnArr[i] % 5 === 0) {
      returnArr[i] = "pong";
    }

  }



    var join = returnArr.join(" ");
    return join;
}


// UI Logic -->
$(function() {
  $("#number-input").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    $("#output ul").append(pingPong(number));
  });
});
