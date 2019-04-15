$(".download-btn").hide();
var checkSlide = function() {
    if ($('.swiper-home').hasClass("swiper-slide-active") || $('.swiper-contact').hasClass("swiper-slide-active")) {
        $(".download-btn").hide();
    } else {
        $(".download-btn").show();
    }
};

var swiperAnimation = new SwiperAnimation();
mySwiper = new Swiper('.swiper-vertical-pagination', {
    pagination: ".swiper-pagination-white",
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    mousewheelControl: true,
    speed: 1000,
    mousewheel: {
        releaseOnEdges: true,
    },
    touchReleaseOnEdges: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
      init: function () {
        swiperAnimation.init(this).animate();
        checkSlide();
      },
      transitionStart: function () {
        swiperAnimation.init(this).animate();
        checkSlide();
      }
    }
})

$(function(){
  $('.download-btn').click(function(e){
    e.preventDefault()
     mySwiper.slideTo(9,1000,false );
  })
})
