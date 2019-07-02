 jQuery(document).ready(function($) {
     $('.btn-search').on('click', function(event) {
         event.preventDefault();
         $('.main-wrap').addClass('main-wrap--move');
         $('.search').addClass('search--open');

     });
     $('#btn-search-close').on('click', function(event) {
         event.preventDefault();
         $('.main-wrap.main-wrap--move').removeClass('main-wrap--move');
         $('.search.search--open').removeClass('search--open');

     });
 });
 $(document).on('keyup', function(evt) {
     if (evt.keyCode == 27) {
         $('.main-wrap.main-wrap--move').removeClass('main-wrap--move');
         $('.search.search--open').removeClass('search--open');
     }
 });
 $(function() {
     'use strict';
     //js for tabs
     var tabsClick = $('.tabs .tab-links a');
     var multiItem = $('.films');
     tabsClick.on('click', function(e) {
         var currentAttrValue = $(this).attr('href');
         var tabsCurrent = $('.tabs ' + currentAttrValue);
         // Show/Hide Tabs
         tabsCurrent.show().siblings().hide();
         // Change/remove current tab to active
         $(this).parent('li').addClass('active').siblings().removeClass('active');
         e.preventDefault();
         multiItem.slick('setPosition');
     });
     $('.films').each(function(idx, item) {
         var carouselId = "carousel" + idx;
         this.id = carouselId;
         $(this).slick({
             slide: "#" + carouselId + " .films-item",
             slidesToShow: 5,
             slidesToScroll: 5,
             infinite: false,
             appendArrows: "#" + carouselId + " .control-ul",
             prevArrow: '<li><a href="#" class="control-s prev"><i class="fa fa-angle-left"></i></a></li>',
             nextArrow: '<li><a href="#" class="control-s next"><i class="fa fa-angle-right"></i></a></li>',
             responsive: [{
                     breakpoint: 1200,
                     settings: {
                         slidesToShow: 4,
                         slidesToScroll: 4,
                     }
                 },
                 {
                     breakpoint: 992,
                     settings: {
                         slidesToShow: 3,
                         slidesToScroll: 3,
                     }
                 }, {
                     breakpoint: 600,
                     settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                     }
                 }
             ]
         });
     });
 });
 jQuery(document).ready(function($) {
     $(".control-s").click(function(event) {
         event.preventDefault();
     });
 });
 $('.actors').each(function(idx, item) {
     var carouselId = "actors" + idx;
     this.id = carouselId;
     $(this).slick({
         slide: "#" + carouselId + " .actors-item",
         slidesToShow: 6,
         slidesToScroll: 6,
         infinite: false,
         appendArrows: "#" + carouselId + " .control-ul",
         prevArrow: '<li><a href="#" class="control-s prev"><i class="fa fa-angle-left"></i></a></li>',
         nextArrow: '<li><a href="#" class="control-s next"><i class="fa fa-angle-right"></i></a></li>',
         responsive: [{
                 breakpoint: 1200,
                 settings: {
                     slidesToShow: 5,
                     slidesToScroll: 5,
                 }
             },
             {
                 breakpoint: 992,
                 settings: {
                     slidesToShow: 4,
                     slidesToScroll: 4,
                 }
             },
             {
                 breakpoint: 600,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                 }
             }
         ]
     });
 });
  $('.actors1').each(function(idx, item) {
     var carouselId = "actors1" + idx;
     this.id = carouselId;
     $(this).slick({
         slide: "#" + carouselId + " .actors-item",
         slidesToShow: 8,
         slidesToScroll: 8,
         infinite: false,
         appendArrows: "#" + carouselId + " .control-ul",
         prevArrow: '<li><a href="#" class="control-s prev"><i class="fa fa-angle-left"></i></a></li>',
         nextArrow: '<li><a href="#" class="control-s next"><i class="fa fa-angle-right"></i></a></li>',
         responsive: [{
                 breakpoint: 1200,
                 settings: {
                     slidesToShow: 6,
                     slidesToScroll: 6,
                 }
             },
             {
                 breakpoint: 992,
                 settings: {
                     slidesToShow: 4,
                     slidesToScroll: 4,
                 }
             },
             {
                 breakpoint: 600,
                 settings: {
                     slidesToShow: 4,
                     slidesToScroll: 4,
                 }
             }
         ]
     });
 });