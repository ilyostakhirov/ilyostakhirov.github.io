$(".search-btn").click(function() {
    $(".search-container").addClass('search-container_visible')
});
$(".search-container-close").click(function() {
    $(".search-container").removeClass('search-container_visible')
});

$(document).on('ready', function() {
    $(".main-slider").slick({
        dots: false,
        infinite: true,
        cssEase: 'linear',
        autoplay: true,
  		autoplaySpeed: 3000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});

$(document).on('ready', function() {
    $(".news-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: "<div class='prev'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='next'><i class='fa fa-angle-right'></i></div>",
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});
jQuery('body').on('click', '#open-button', function() {
    if ($('body').hasClass("show-menu")) {
        $("body").removeClass("show-menu");
    } else {
        $("body").addClass("show-menu");
    }
});
jQuery('body').on('click', '#close-button', function() {
    $("body").removeClass("show-menu");
});