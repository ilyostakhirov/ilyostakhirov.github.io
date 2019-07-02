var swiperAnimation = new SwiperAnimation();

var mySwiper = undefined;

function initSwiper() {
    var screenWidth = $(window).width();
    if (screenWidth > 768 && mySwiper == undefined) {
        $(".download-btn").hide();
        var checkSlide = function() {
            if ($('.swiper-home').hasClass("swiper-slide-active") || $('.swiper-contact').hasClass("swiper-slide-active")) {
                $(".download-btn").hide();
            } else {
                $(".download-btn").show();
            }
        };
        $(function() {
            $('.download-btn').click(function(e) {
                e.preventDefault()
                mySwiper.slideTo(9, 600, false);
            })
        })

        mySwiper = new Swiper('.swiper-vertical-pagination', {
            pagination: ".swiper-pagination-white",
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 0,
            effect: 'fade',
            mousewheelControl: true,
            mousewheelForceToAxis: true,
            speed: 600,
            mousewheel: {
                releaseOnEdges: true,
            },
            touchReleaseOnEdges: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            on: {
                init: function() {
                    swiperAnimation.init(this).animate();
                    checkSlide();
                },
                transitionStart: function() {
                    swiperAnimation.init(this).animate();
                    checkSlide();
                },
                resize: function() {
                    mySwiper.update();
                }
            }
        });
    } else if (screenWidth > 768 && mySwiper != undefined) {
        mySwiper.destroy();
        mySwiper = undefined;
        jQuery('.swiper-wrapper').removeAttr('style');
        jQuery('.swiper-slide').removeAttr('style');
    }
}

//Swiper plugin initialization
initSwiper();

//Swiper plugin initialization on window resize
$(window).on('resize', function() {
    initSwiper();
});



$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("header nav").addClass("bg");
    } else {
        $("header nav").removeClass("bg");
    }
});

$(".download-btn").on("click", function() {
    $('html, body').animate({
        scrollTop: $(".swiper-contact").offset().top
    }, 1000);
});