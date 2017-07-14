// Business Logic -->

var pingPong = function(number) {
  
}



// UI Logic -->
$(function(){
  $("#number-input").submit(function(event){
    event.preventDefault();
    var origNumber = $("#number").val();
    $("#output ul").append("<li>" + origNumber + "</li");
  });
});
