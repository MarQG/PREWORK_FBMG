$("#growButton").on("click", function(){

	//$("#box").css("transform", "none");
	$("#box").toggleClass("grow");
	
	$("#box").css("margin", "45px auto");

});

$("#blueButton").on("click", function(){

	$("#box").css("background-color", "blue");

});

$("#greenButton").on("click", function(){

	$("#box").css("background-color", "green");

});

$("#rotateButton").on("click", function(){

	//$("#box").css("transform", "none");
	$("#box").toggleClass("rotated");
	

});


$("#fadeButton").on("click", function(){

	$("#box").fadeToggle("slow", "linear");

});

$("#resetButton").on("click", function(){

	$("#box").css("margin", "25px auto");
	$("#box").css("background-color", "orange");
	$("#box").removeClass("grow rotated");
	$("#box").show();

});	