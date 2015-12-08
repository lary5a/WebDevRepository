$( document ).ready(function() {

	
	$(".fancybox").fancybox();

	console.log("document is ready!");

	// jQuery can help you select HTML elements on your page
	var $button = $(".button");

	$("#poem").fancybox({
    	openEffect : 'none',
    	closeEffect	: 'none',
    	helpers : {
    		title : {
    			type : 'outside'
    		}
    	}
    });
	
});