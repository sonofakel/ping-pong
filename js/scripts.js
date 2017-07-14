// Global Variabes -->

var returnArr = [];

// Business Logic -->

var pingPong = function(number) {
  var initalValue = 0;
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
    } else if (returnArr[i] % 3 === 0) {
      returnArr[i] = "ping";
    } else if (returnArr[i] % 5 === 0) {
      returnArr[i] = "pong";
    } else {
      returnArr[i];
    }
  }
  for (var i = 0; i < returnArr.length; i++) {
    returnArr[i] = "<li>" + returnArr[i] + "</li>";
  }
  var join = returnArr.join(" ");
  return join;
}

// UI Logic -->
$(function() {
  $("#number-input").submit(function(event) {
    event.preventDefault();
    $("#hide img").hide();
    var number = $("#number").val();
    $("#output ul").append(pingPong(number));
  });
  $("#refresh").click(function() {
    location.reload();
  });

});
