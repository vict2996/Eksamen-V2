$(document).ready(function(){

// logo fade in
$("header a img").hide().fadeIn(2000);

// mobile menu animation
$("#mainHeader div").click(function(){
	$("#mainHeader nav").slideToggle();

});

// SLIDESHOW
$(".fadein img:gt(0)").hide();

setInterval(function(){

	$(".fadein :first-child").fadeOut(1000).next("img").fadeIn(1000).end().appendTo(".fadein");
},5000);

});