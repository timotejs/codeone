$(window).on('scroll', function() {
	if($(window).scrollTop()) {
		$('nav').addClass('dark');
		alert("Dark");
	}
	else {
		$('nav').removeClass('dark');
		alert("No Dark");
	}
})