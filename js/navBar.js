var x2 = document.getElementById("index1");
var x3 = document.getElementById("LOGO1");
if(window.innerWidth > 856) {
	x2.style.display = "none";
	x3.style.display="inline";
}
else {
	x2.style.display = "inline";
	x3.style.display = "none";
}
window.onscroll = function() {myF()};
function myF() {
	if(window.innerWidth > 856) {
		x2.style.display = "none";
		x3.style.display="inline";
	}
	else {
		x2.style.display = "inline";
		x3.style.display = "none";
	}
	var y = document.getElementById("header");
		if(window.pageYOffset >= 30)
 			y.style.background = "rgba(0, 0, 0, 1.0)";
 		else 
 			y.style.background = "rgba(0, 0, 0, 0.7)";
}
