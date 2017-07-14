// Business Logic -->

// Global Variabes -->
var returnArr = [];

// Count up to 2 from 1 when user inputs 2

var pingPong = function(number) {
  debugger;
  for (i = 1; i <= number, i++)
    returnArr.push(i)
    }




// UI Logic -->
$(function(){
  $("#number-input").submit(function(event){
    event.preventDefault();
    var number = $("#number").val();
    $("#output ul").append("<li>" + pingPong(number) + "</li");
  });
});
