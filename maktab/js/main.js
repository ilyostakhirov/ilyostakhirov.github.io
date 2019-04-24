var swiperAnimation = new SwiperAnimation();

var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    mousewheel: true,
    keyboard: true,
    freeMode: true,
    freeModeMomentum: true,
    speed:500,
    simulateTouch: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    on: {
      init: function () {
        swiperAnimation.init(this).animate();
      },
      slideChange: function () {
        swiperAnimation.init(this).animate();
      }
    },
    breakpoints: {
        768: {
          direction: 'vertical',
          mousewheel: true,
          allowTouchMove: true,
        }
      },
      
      
});
 


let burger = document.getElementById('burger'),
    nav = document.getElementById('main-menu');

burger.addEventListener('click', function(e) {
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});


;
(function(window) {

    'use strict';

    var openCtrl = document.getElementById('btn-search'),
        closeCtrl = document.getElementById('btn-search-close'),
        searchContainer = document.querySelector('.search'),
        inputSearch = searchContainer.querySelector('.search__input');

    function init() {
        initEvents();
    }

    function initEvents() {
        openCtrl.addEventListener('click', openSearch);
        closeCtrl.addEventListener('click', closeSearch);
        document.addEventListener('keyup', function(ev) {
            // escape key.
            if (ev.keyCode == 27) {
                closeSearch();
            }
        });
    }

    function openSearch() {
        searchContainer.classList.add('search--open');
        inputSearch.focus();
    }

    function closeSearch() {
        searchContainer.classList.remove('search--open');
        inputSearch.blur();
        inputSearch.value = '';
    }

    init();

})(window);