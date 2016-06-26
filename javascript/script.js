var rows = 8;
var columns = 8;
var $row = $("<div />", {
	class: 'row'
});
var $square = $("<div />", {
	class: 'square'
});

$(document).ready(function () {
	//add columns to temporary row object
	for (var i = 0; i < columns; i++) {
		$row.append($square.clone());
	}
	//clone temporary object with columns to wrapper
	for (var i = 0; i < rows; i++) {
		$("#wrapper").append($row.clone());
	}
});

$(function() {
    $('.square').mouseenter(function() {
        $(this).addClass("color").animate({"opacity": "1"},100);
    }).mouseleave(function () {
        //$(this).removeClass("color");
        $(this).css("opacity", "50%").animate({"opacity":"0.1"},1000);
    });
});

$(document).ready(function() {
    $("#btn").click(function(){
		location.reload();
    })
});


