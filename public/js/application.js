$(document).ready(function(){
  console.log("are we on the page?")

 $("#failure").hide(); 
  $('#login_submit').click(function() {
   event.preventDefault();
   $("#failure").show();

  });
 
});