var x3 = document.getElementById("LOGO");
var x2 = document.getElementById("logo");
var x1 = document.getElementById("index1")

if(window.innerWidth > 856) {
	x2.style.display = "none";
	x3.style.display="inline";
	x1.style.display="none";
}
else {
	x2.style.display = "inline";
	x3.style.display = "none";
	x1.style.display = "inline";
}
$( window ).resize(function(){
	if(window.innerWidth > 856) {
		x2.style.display = "none";
		x3.style.display = "inline";
		x1.style.display = "none";
	}
	else {
		x2.style.display = "inline";
		x3.style.display = "none";
		x1.style.display = "inline";
	}
});
