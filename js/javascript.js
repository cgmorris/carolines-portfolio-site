$(document).ready(function(){

$('a.menu-icon').click(function() {
  $('#menu-links').slideToggle();
});

// fix hidden links on window resize

$(window).resize(function() {
  if ($(window).width() > 700) {
    $('#menu-links').removeAttr('style');
  }
});

//sending to epicurious
$('#find-recipe').click(function(){
  var str = $('input').val();
  var res = str.split(" ");
  console.log(res);
  if (res.length <2) {
    res[1]= " ";
    res[2]= " ";
  } else if (res.length < 3) {
    res[2]= " ";
  } else {};
  window.open("http://www.epicurious.com/tools/searchresults?search="+res[0]+"+"+res[1]+"+"+res[2]+"");
});

//button direct to get cooking




    
}); //close