$(document).ready(function () {

	var lastScrollTop = 0;

	if (window.matchMedia('(max-width: 767px)').matches) {
		$(window).scroll(function (event) {
			var st = $(this).scrollTop();
			if (st > lastScrollTop) {
				$('.header__nav1').slideUp();
			} else {
				$('.header__nav1').slideDown();
			}
			lastScrollTop = st;
		});
	}

})
