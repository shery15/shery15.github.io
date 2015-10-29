$(document).ready(function() {
	draw();
});
var draw = function() {
	var canvas = document.getElementById("avatar");
   	if (canvas.getContext) {
	    var logo = canvas.getContext("2d");

	    logo.fillStyle = "rgb(255,255,255)";
	    logo.fillRect (0, 0, 100, 200);

	    logo.fillStyle = "rgb(34, 195, 169)";
	    logo.fillRect (100, 0, 100, 200);

	    logo.lineWidth = 3;
	    logo.lineCap = "round";
	    logo.lineJoin= "miter";
	    logo.beginPath();
	    logo.moveTo(100,158);
	    logo.lineTo(122,130);
	    logo.lineTo(110,84);/*折点*/
		logo.lineTo(124,60);
		logo.lineTo(164,46);
	    logo.strokeStyle = "rgb(255,255,255)"
	    logo.stroke();

	    logo.beginPath();
	    logo.moveTo(110,84);
	    logo.lineTo(146,72);
	    logo.strokeStyle = "rgb(255,255,255)"
	    logo.stroke();

	    logo.beginPath();
	    logo.moveTo(100,158);
	    logo.lineTo(78,130);
	    logo.lineTo(90,84);/*折点*/
	    logo.lineTo(76,60);
	    logo.lineTo(36,46);
	    logo.strokeStyle = "rgb(34,195,169)"
	    logo.stroke();

	    logo.beginPath();
	    logo.moveTo(90,84);
	    logo.lineTo(54,72);
	    logo.strokeStyle = "rgb(34,195,169)"
	    logo.stroke();
   	} else {
     	var container = document.getElementById("container");
     	container.removeChild(canvas);
     	var img = document.createElement("img");
     	img.setAttribute("id","avatar");
		img.setAttribute("src","images/avatar.png");
     	container.appendChild(img);
    }
};