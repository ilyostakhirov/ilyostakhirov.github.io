$(document).ready(function() {

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header-wrap').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header-wrap').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header-wrap').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}



    $(window).on('load resize', function() {
        var window_width = $(window).width();
        if (window_width < 991) {
            $('.flexMenu2').flexMenu({
                undo: true
            });
        } else {            

            $('.flexMenu1').flexMenu({
                showOnHover: true,
                linkText: "•••",
                linkTitle: "Показать еще",
                linkTextAll: "Меню",
                linkTitleAll: "Развернуть меню",
                popupClass: 'dropdown-menu dropdown-menu1',
                cutoff: 1,
                threshold: 1
            });
            $('.flexMenu2').flexMenu({
                showOnHover: true,
                linkText: "•••",
                linkTitle: "Показать еще",
                linkTextAll: "Меню",
                linkTitleAll: "Развернуть меню",
                popupClass: 'dropdown-menu dropdown-menu1',
                cutoff: 1,
                threshold: 1
            });
            $('.flexMenu3').flexMenu({
                showOnHover: true,
                linkText: "•••",
                linkTitle: "Показать еще",
                linkTextAll: "Меню",
                linkTitleAll: "Развернуть меню",
                popupClass: 'dropdown-menu dropdown-menu1',
                cutoff: 1,
                threshold: 1
            });

            $(document).mouseup(function(e) {
                var div = $(".flexMenu-viewMore");
                if (!div.is(e.target) &&
                    div.has(e.target).length === 0) {
                    $('.flexMenu-popup').hide();
                    $('.flexMenu-viewMore').removeClass('active');
                }
            });

        }
    });

    var $result1 = $("#tarif1 .sum span");
    var $percent1 = $("#tarif1 .percent");
    var $result2 = $("#tarif2 .sum span");
    var $percent2 = $("#tarif2 .percent");
    $("#tarif1_range").ionRangeSlider({
        type: "single",
        grid: true,
        values: ["0", "1 000 000", "2 500 000", "5 000 000", "от 5 000 000"],
        from: 1,
        to: 5,
        grid_snap: true,
        from_min: 1,
        from_max: 5,
        onChange: function(data) {
            $result1.text(data.from_value);
            if (data.from_value === "1 000 000") {
                $percent1.text("3,5 %");
                $("#tarif1 .percent").addClass('lg-text').removeClass('sm-text');
            } else if (data.from_value === "2 500 000") {
                $percent1.text("3 %");
                $("#tarif1 .percent").addClass('lg-text').removeClass('sm-text');
            } else if (data.from_value === "5 000 000") {
                $percent1.text("2,5 %");
                $("#tarif1 .percent").addClass('lg-text').removeClass('sm-text');
            } else if (data.from_value === "от 5 000 000") {
                $percent1.text("Индивидуальная");
                $("#tarif1 .percent").addClass('sm-text').removeClass('lg-text');
            }
        }
    });



    $("#tarif2_range").ionRangeSlider({
        type: "single",
        grid: true,
        values: ["0", "1 000 000", "10 000 000", "30 000 000", "50 000 000", "от 50 000 000"],
        from: 1,
        to: 6,
        from_min: 1,
        from_max: 6,
        onChange: function(data) {
            $result2.text(data.from_value);
            if (data.from_value === "1 000 000") {
                $percent2.text("1,5 %");
                $("#tarif2 .percent").addClass('lg-text').removeClass('sm-text');
            } else if (data.from_value === "10 000 000") {
                $percent2.text("1,3 %");
                $("#tarif2 .percent").addClass('lg-text').removeClass('sm-text');
            } else if (data.from_value === "30 000 000") {
                $percent2.text("1 %");
                $("#tarif2 .percent").addClass('lg-text').removeClass('sm-text');
            } else if (data.from_value === "50 000 000") {
                $percent2.text("0,8 %");
                $("#tarif2 .percent").addClass('lg-text').removeClass('sm-text');
            } else if (data.from_value === "от 50 000 000") {
                $percent2.text("Индивидуальная");
                $("#tarif2 .percent").addClass('sm-text').removeClass('lg-text');
            } else if (data.from_value === "0") {
                $percent2.text("1,5 %");
                $("#tarif2 .percent").addClass('sm-text').removeClass('sm-text');
            }
        }
    });


    var swiper = new Swiper('.slider-clients', {
        allowTouchMove: false,
        slidesPerView: 'auto',
        grabCursor: true,
        spaceBetween: 0,
        loop: true,
        freeMode: true,
        speed: 100000,
        autoplay: {
            delay: 0,
        },
        keyboard: {
            enabled: false
        },
    });

    function checkValue(element) {
        // check if the input has any value (if we've typed into it)
        if ($(element).val())
            $(element).addClass('has-value');
        else
            $(element).removeClass('has-value');
    }

    $(document).ready(function() {
        // Run on page load
        $('.form-control').each(function() {
            checkValue(this);
        })
        // Run on input exit
        $('.form-control').blur(function() {
            checkValue(this);
        });

    });


});