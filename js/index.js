//Latest News | Facebook Page | Youtube Channel
		
	var x = document.getElementsByClassName("SOC");
	var y = document.getElementsByClassName("MEDIA21");
	var z = document.getElementsByClassName("MEDIA1");
	for(var i=0; i<x.length; i++) {
		x[i].style.display = "none";
		z[i].style.display = "none";
	}
	y[0].className += " active2";
	x[0].style.display = "block";
	z[0].style.display = "block";
	function lanews() {
		for(var i=0; i<x.length; i++) {
			x[i].style.display = "none";
			z[i].style.display = "none";
		}
		x[0].style.display = "block";
		y[0].className += " active2";
		y[1].className = "MEDIA21 fa fa-facebook";
		y[2].className = "MEDIA21 fa fa-youtube";
		z[0].style.display = "block";
	}
	function fb1() {
		for(var i=0; i<x.length; i++) {
			x[i].style.display = "none";
			z[i].style.display = "none";
		}
		x[1].style.display = "block";
		y[1].className += " active2";
		y[0].className = "MEDIA21 fa fa-edit";
		y[2].className = "MEDIA21 fa fa-youtube";
		z[1].style.display = "block";
	}
	function twit1() {
		for(var i=0; i<x.length; i++) {
			x[i].style.display = "none";
			z[i].style.display = "none";
		}
		x[2].style.display = "block";
		y[2].className += " active2";
		y[0].className = "MEDIA21 fa fa-edit";
		y[1].className = "MEDIA21 fa fa-facebook";
		z[2].style.display = "block";
	}

//Padding for different screens
	if(window.innerWidth >= 480) {
		document.getElementById("ws2").style.padding = "70px 0px 60px 0px";
	}
	else {
		document.getElementById("ws2").style.padding = "50px 5px 50px 5px";
	}
	$( window ).resize(function() {
		if(window.innerWidth >= 480) {
			document.getElementById("ws2").style.padding = "70px 0px 60px 0px";
		}
		else {
			document.getElementById("ws2").style.padding = "50px 5px 50px 5px";
		}
	});

//Transparency of Nav Bar on scroll
var a = document.getElementById("header");
		if(window.pageYOffset >= 30)
 			a.style.background = "rgba(0, 0, 0, 1.0)";
 		else 
 			a.style.background = "rgba(0, 0, 0, 0.7)";

window.onscroll = function() {Transparency()};
	function Transparency() {
		if(window.pageYOffset >= 30)
 			a.style.background = "rgba(0, 0, 0, 1.0)";
 		else 
 			a.style.background = "rgba(0, 0, 0, 0.7)";
 	}

//color change in Nav bar element
document.getElementById("index1").style.color = "white";	