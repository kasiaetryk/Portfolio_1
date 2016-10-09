$(document).ready(function() {
    checkSize();
    $(window).resize(checkSize);
});

function checkSize(){
    if ($("#menu").css("text-align") == "center" ){
		$("#menu").hide();
		$("#hamburger").show();
    }
    else {
    	$("#menu").show();
    	$("#hamburger").hide();
    }
}

$("#hamburger").click(function() {
	$("#menu").slideToggle( "slow", function() {
	});
});

$("li.link").click(function() {
	if ($("#menu").css("text-align") == "center" ){
		$("#menu").slideToggle( "slow");
	}
});

$(function(){
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 3000)
	function changeSlide(){
    carouselList.animate({marginLeft:-1280}, 1280, placeFirstSlide);
  }
  function placeFirstSlide(){
    var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
  };
});