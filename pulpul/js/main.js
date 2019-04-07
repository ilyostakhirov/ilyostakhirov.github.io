var swiperAnimation = new SwiperAnimation();
var mySwiper = new Swiper('.swiper-vertical-pagination', {
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
      },
      slideChange: function () {
        swiperAnimation.init(this).animate();
      }
    }
})

AOS.init();