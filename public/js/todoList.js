$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//on key press 13 (Enter) add another todo
$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash-alt'></span></i>" + todoText + "</li>");
  }
});

$(".fa-plus").on('click', function() {
  $("input[type='text']").fadeToggle();
});