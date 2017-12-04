//position of Nav bar 2 w.r.t screen size
			var s1 = document.getElementById("stic");
			if(window.innerWidth > 856) {  //for displaying icon on desktop and "HOME" on tabs
				s1.style.top = "58px";
			}
			else {
				s1.style.top = "42px";
			}
			$( window ).resize(function() {
				if(window.innerWidth > 856) {  //for displaying icon on desktop and "HOME" on tabs
					s1.style.top = "58px";
				}
				else {
					s1.style.top = "42px";
				}
			});
//smooth scroll for Nav bar 2
			$(document).ready(function() {
				$("#part2").click(function() {
					$("body,html").animate(
						{scrollTop :   $("#mechanical").offset().top - 80}, 400
					);  //how fast the scrolling animation will be in miliseconds
				});
			});
			$(document).ready(function() {
				$("#part3").click(function() {
					$("body,html").animate(
						{scrollTop :   $("#electrical").offset().top - 80}, 400
					);  //how fast the scrolling animation will be in miliseconds
				});
			});
			$(document).ready(function() {
				$("#part4").click(function() {
					$("body,html").animate(
						{scrollTop :   $("#software").offset().top - 80}, 400
					);  //how fast the scrolling animation will be in miliseconds
				});
			});

//changing Nav bar 2 values w.r.t screen size
			var y1 = document.getElementsByClassName("button1");  
			if(window.innerWidth >= 480) {
				y1[0].innerHTML = "Mechanical Subsystem";
				y1[1].innerHTML = "Software Subsystem";
				y1[2].innerHTML = "Electrical Subsystem";
			}
			else {
				y1[0].innerHTML = "Mechanical";
				y1[1].innerHTML = "Software";
				y1[2].innerHTML = "Electrical";
			}
			$( window ).resize(function() {
				if(window.innerWidth >= 480) {
					y1[0].innerHTML = "Mechanical Subsystem";
					y1[1].innerHTML = "Software Subsystem";
					y1[2].innerHTML = "Electrical Subsystem";
				}
				else {
					y1[0].innerHTML = "Mechanical";
					y1[1].innerHTML = "Software";
					y1[2].innerHTML = "Electrical";
				}
			});

//color change in Nav bar element
document.getElementById("varun1").style.color = "white";