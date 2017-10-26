$(document).ready(function() {
  stack = new StackDataStructure();
  for (var ix = 0; ix < stack.MAX_SIZE; ix++) {
    $("#stack-boxes").append("<div class='col-lg grey-box inner-margins empty-stack'> </div>");
  }

  $("#add-btn").click(function() {
    if (stack.push($("#input").val()) != "Stack Overflow") {
      $('.empty-stack:last').text($("#input").val()).toggleClass('empty-stack full-stack');
    } else {
      alert('Stack Overflow!!!!'.toUpperCase());
    }
  });

  $("#take-btn").click(function() {
    if (stack.pop($("#input").val()) != 'Stack Underflow') {
      $('.full-stack:first').text('').toggleClass('full-stack empty-stack');
    } else {
      alert('Stack Underflow!!!!'.toUpperCase());
    }
  });

});
