//

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll < 70) {
        $(".main-nav").removeClass("scroll");
    }
    if (scroll >= 70) {
        $(".main-nav").addClass("scroll");
    }
    // if (scroll >= 400) {
    //     $(".navbar-public").removeClass("navbar-transparent");
    // }
    // if (scroll < 400) {
    //     $(".navbar-public").addClass("navbar-transparent");
    // }
});
