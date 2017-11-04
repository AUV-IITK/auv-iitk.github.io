
var page=["#Faculty_Advisors","#a",".navicon1"];
function animate2(x,navhover,navicon){
		if(x==page[0]){
			return;
		}
		else{
			$(navicon).addClass('active1');
			$(page[2]).removeClass('active1');

            $(x).css({ "opacity": "1"});
			//$(page[0]).removeClass("active");
            $(navhover).css({ "color": "black" });
            $(page[1]).css({ "color": "white"});
            $(page[0]).slideUp(1000);
            $(page[0]).css({ "opacity": "0", "transition": 'opacity 1s' });
            $(x).slideDown(1000);
            page = [x, navhover,navicon];

		}


}
