// Select color input
// Select size input

var color;
var gridHeight;
var gridWidth;

// When size is submitted by the user, call makeGrid()
$("#submitButton").click(function(event){
	event.preventDefault();

	gridHeight=$("#inputHeight").val();
	gridWidth=$("#inputWeight").val();

	makeGrid(gridHeight,gridWidth);
});


function makeGrid(height, width) {

	for(var index=0;index<height;index++){
		$("#pixelCanvas").append("<tr id=\"table"+height+"\"></tr>");

		for(var index1=0;index1<width;index1++){
			$("tr").filter(":last").append("<td></td>");
		}
	}

	$("td").click(function(event){

		color=$("#colorPicker").val();
		if($(this).attr("style")){
			$(this).removeAttr("style");
		}
		else{
			$(this).css("background-color",color);
		}
	});

}
