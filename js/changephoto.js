
$( document ).ready(function() {
	
	$("#sign").click(function () { 
	   $("#thephone").removeClass("phone2 phone3");
	    $("#thephone").addClass("phone");                
           
	});


	$("#reminder").click(function () { 
	   $("#thephone").removeClass("phone phone3");
	    $("#thephone").addClass("phone2");                
           
	});

	$("#throw").click(function () { 
	   $("#thephone").removeClass("phone phone2");
	    $("#thephone").addClass("phone3");                
           
	});
});


