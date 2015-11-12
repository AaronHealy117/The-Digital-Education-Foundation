
/* Home Page Image - Opacity from 0.8 - 1.0 on hover and vice versa*/
$(document).ready(function(){
	$('.subjectsHomeImg').mouseenter(function(){
		$(this).fadeTo('Slow',1);
	});	
});

$(document).ready(function(){
	$('.subjectsHomeImg').mouseleave(function(){
		$(this).fadeTo('Slow',0.8);
	});	
});



/* Sample JQuery to change image background on hover --> Not correct unless image roundness defined










































































$(document).ready(function(){
	$('.aboutHomeImg').mouseenter(function(){
		$(this).css('background','#696969');	
	});
});

$(document).ready(function(){
	$('.aboutHomeImg').mouseleave(function(){
		$(this).css('background','#FFFFFF');	
	});
});
*/