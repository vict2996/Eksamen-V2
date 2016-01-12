$(document).ready(function(){

$(".fadein img:gt(0)").hide();

setInterval(function(){

	$(".fadein :first-child").fadeOut(1000).next("img").fadeIn(1000).end().appendTo(".fadein");
},5000);

});