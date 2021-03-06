var hideHeader;
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

function hasScrolled() {
    var st = $(this).scrollTop();


    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else if ($(window).scrollTop() < 100) {
        $('.header').removeClass('nav-up').removeClass('nav-down');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll && !hideHeader) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();

$('.login-page .nav-item').on('click', function() {
    if ($(this).find('.reg-link').length !== 0) {
        $(".bg-login").addClass('reg-active')
    } else {
        $(".bg-login").removeClass('reg-active')
    }
});

var ckbox = $('#employeeCheck');

$('input').on('click', function() {
    if (ckbox.is(':checked')) {
        $('.esp').hide('fast');
        $('.emploee').show('fast');
         
    } else {
        $('.emploee').hide('fast');
         $('.esp').show('fast');
    }
});