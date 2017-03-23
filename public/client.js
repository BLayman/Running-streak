$(document).ready(function(){

$("form").on("submit", function (event) {
  event.preventDefault();
  var form = $(this).serialize();
  console.log(form);
  $.ajax({
    type:"POST", url:"/streak", data:form
   }).done(function (resp) {
    console.log(resp.days);
    $(".days").html(resp.days);
    $(".streakLength").show();
  })

})

});
