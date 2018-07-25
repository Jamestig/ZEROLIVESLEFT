$(document).ready(function(){
	var lastScrollTop = 0;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		if (st > lastScrollTop){
			$('.top-nav').slideUp();
		} else {
			$('.top-nav').slideDown();
		}
		lastScrollTop = st;
	});
})