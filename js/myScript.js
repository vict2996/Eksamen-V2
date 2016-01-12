$(document).ready(function(){

$("header a img").hide().fadeIn(2000);



// SLIDESHOW
$(".fadein img:gt(0)").hide();

setInterval(function(){

	$(".fadein :first-child").fadeOut(1000).next("img").fadeIn(1000).end().appendTo(".fadein");
},5000);

});