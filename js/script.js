var prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', function () {
    if ($(window).scrollTop() === 0) {
        $("#scroll-info").fadeIn("slow");
        $(".navbar").fadeIn();
    } else {
        $("#scroll-info").fadeOut("slow");
        $(".navbar").fadeOut();
    }
});
