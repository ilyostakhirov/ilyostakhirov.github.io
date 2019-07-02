
$(document).ready(function(){




    /***/
    //var offsetHeight = 0;
    //$('.nav-collapse').scrollspy({
    //    offset: offsetHeight
    //});
    //
    //$('.menu_list li a').click(function (event) {
    //    var scrollPos = $('body > .wrapper').find($(this).attr('href')).offset().top - offsetHeight;
    //    $('body,html').animate({
    //        scrollTop: scrollPos
    //    }, 500, function () {
    //        $(".btn-navbar").click();
    //    });
    //    return false;
    //});
    ///***/
    //var top = $('.alert_box').offset().top+$('.alert_box').outerHeight()-80;
    //fix_menu($('#menu_my'),top);
    //$(window).scroll(function(){
    //    fix_menu($('#menu_my'),top);
    //});
    /***/



    $('.tab_title span').click(function(e){
        e.preventDefault();
        $('.tab_title').toggleClass('active');
        $('.tab_content').slideToggle(400,function(){});
    });

    $('.keep').click(function(){
        $('.menu_list').slideToggle(400,function(){});
    });

    $(window).click(function(e){
        if(!($(e.target).parents('.menu_list').hasClass('.menu_list'))
            && !($(e.target).hasClass('.menu_list'))
            && !($(e.target).parents('.keep').hasClass('.keep'))
        ){
            $('.menu_list').removeClass('active');
        }
    });


    $('.btn_tab').click(function(e){
        e.preventDefault();
        //$('.list_hidden').css('display','none');
        //$(this).toggleClass('active');
        //$(this).parent('li').children('.list_hidden').addClass('active');
        //$(this).parent('li').children('.list_hidden').toggleUp();
        //$(this).parent('li').children('.list_hidden').slideToggle(400,function(){});
    });

    $('.btn_select').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent('li').children('.selector_hide').slideToggle(200,function(){});
    });

    $('li.mini_menu>a').prepend('<i></i>');
    $('.list_menu .mini_menu a').click(function(e){
        e.preventDefault();
        $(this).parent('li').children('.list_menu_in').slideToggle(200,function(){});
    });

    $('.hamburger').click(function(){
        $('.header_menu').toggleClass('open');
        $('.header_menu').toggleClass('animated');
        $('.header_menu').toggleClass('fadeInDown');
    });

    $(window).click(function(e){
        if(!($(e.target).parents('.head_menu').hasClass('head_menu'))
            && !($(e.target).hasClass('head_menu'))
            && !($(e.target).parents('.hamburger').hasClass('hamburger'))
        ){
            $('.header_menu').removeClass('open');
            $('.header_menu').removeClass('animated');
            $('.header_menu').removeClass('fadeInDown');
        }
    });
    $('#myVideo').removeAttr('poster');
    if ($(window).width() < 991) {
        // $('#myVideo').removeAttr('poster');

        $('.scroll ul li').click(function(){
            $(this).find('.hide_more').toggleClass('open');
        });
    }
    $(window).resize(function() {
        if ($(window).width() < 991) {
            // $('#myVideo').removeAttr('poster');

            $('.scroll ul li').click(function(){
                $(this).find('.hide_more').toggleClass('open');
            });
        }
        if ($(window).width() > 991) {
            $('.hide_more').removeClass('open');
        }
    });


    $("#scroll").niceScroll({
        cursorwidth: 23,
        railalign: 'left',
        cursorfixedheight: 23
    });
    //$("#scroll").getNiceScroll(0).doScrollLeft(x, duration);

    $('li.question_none').prepend("<img src='img/answer.png' class='question_img'  data-toggle='popover' data-content='Чем могу помочь'>");
    $(function () {
        $('[data-toggle="popover"]').popover({
            trigger: 'hover',
            placement: 'top'
        })
    })

    $('.select_list li label').click(function(){
        $('.select_list li label input').parent().css('background-image','url("img/select_empty.png")');
        $('.select_list li label input:checked').parent().css('background-image','url("img/select_focus.png")');
    });
    $('.select_list li label input').parent().css('background-image','url("img/select_empty.png")');
    $('.select_list li label input:checked').parent().css('background-image','url("img/select_focus.png")');

    $('.select_list_kv li label').click(function(){
        $('.select_list_kv li label input').parent().css('background-image','url("img/select_empty2.png")');
        $('.select_list_kv li label input:checked').parent().css('background-image','url("img/select_focus2.png")');
    });
    $('.select_list_kv li label input').parent().css('background-image','url("img/select_empty2.png")');
    $('.select_list_kv li label input:checked').parent().css('background-image','url("img/select_focus2.png")');


    $(function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 3,
            max: 36,
            values: [ 13, 30 ],
            slide: function( event, ui ) {
                $(ui.handle).html('<span class="value_ui">'+ui.value+'</span>');
                $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            },
            create: function( event, ui ){
                $($(this).find('.ui-slider-handle')[0]).html('<span class="value_ui">'+$(this).slider("values")[0]+'</span>');
                $($(this).find('.ui-slider-handle')[1]).html('<span class="value_ui">'+$(this).slider("values")[1]+'</span>');
            }
        });
        $( "#slider-range2" ).slider({
            range: true,
            min: 3,
            max: 63,
            values: [ 13, 30 ],
            slide: function( event, ui ) {
                $(ui.handle).html('<span class="value_ui">'+ui.value+'</span>');
                $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            },
            create: function( event, ui ){
                $($(this).find('.ui-slider-handle')[0]).html('<span class="value_ui">'+$(this).slider("values")[0]+'</span>');
                $($(this).find('.ui-slider-handle')[1]).html('<span class="value_ui">'+$(this).slider("values")[1]+'</span>');
            }
        });
        $( "#slider-range3" ).slider({
            range: true,
            min: 0,
            max: 2800,
            values: [ 100, 2100 ],
            slide: function( event, ui ) {

                $(ui.handle).html('<span class="value_ui">'+ui.value+'</span>');
                $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            },
            create: function( event, ui ){
                $($(this).find('.ui-slider-handle')[0]).html('<span class="value_ui">'+$(this).slider("values")[0]+'</span>');
                $($(this).find('.ui-slider-handle')[1]).html('<span class="value_ui">'+$(this).slider("values")[1]+'</span>');
                $(this).parents('li').find('.start').html($(this).slider("values")[0]);
                $(this).parents('li').find('.finish').html($(this).slider("values")[1]);
            }
        });
        $( "#slider-range4" ).slider({
            range: true,
            min: 0,
            max: 18788,
            values: [ 0, 17400 ],
            slide: function( event, ui ) {
                $(ui.handle).html('<span class="value_ui">'+ui.value+'</span>');
                $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            },
            create: function( event, ui ){
                $($(this).find('.ui-slider-handle')[0]).html('<span class="value_ui">'+$(this).slider("values")[0]+'</span>');
                $($(this).find('.ui-slider-handle')[1]).html('<span class="value_ui">'+$(this).slider("values")[1]+'</span>');
                $(this).parents('li').find('.start').html($(this).slider("values")[0]);
                $(this).parents('li').find('.finish').html($(this).slider("values")[1]);
            }
        });
        $( "#slider-range5" ).slider({
            range: true,
            min: 0,
            max: 3545,
            values: [ 980, 2780 ],
            slide: function( event, ui ) {
                $(ui.handle).html('<span class="value_ui">'+ui.value+'</span>');
                $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            },
            create: function( event, ui ){
                $($(this).find('.ui-slider-handle')[0]).html('<span class="value_ui">'+$(this).slider("values")[0]+'</span>');
                $($(this).find('.ui-slider-handle')[1]).html('<span class="value_ui">'+$(this).slider("values")[1]+'</span>');
                $(this).parents('li').find('.start').html($(this).slider("values")[0]);
                $(this).parents('li').find('.finish').html($(this).slider("values")[1]);
            }
        });
    });

    $("#owl-demo, #owl-demo2").owlCarousel({
        navigation : true,
        autoPlay: false,
        items : 3,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [979,2],
        itemsTablet : [768, 1],
        itemsMobile : [479, 1],
        mouseDrag : false,
        touchDrag : false
    });

    $("#owl-demo3").owlCarousel({
        navigation : true,
        autoPlay: false,
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet : [768, 1],
        itemsMobile : [479, 1],
        mouseDrag : false,
        touchDrag : false
    });

    $("#owl-demo4").owlCarousel({
        navigation : true,
        autoPlay: false,
        navigationText : ["<img src='img/left_slide.png' class='slide_left'>", "<img src='img/right_slide.png' class='slide_right'>"],
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,2],
        itemsTablet : [768, 1],
        itemsMobile : [479, 1],
        mouseDrag : false,
        touchDrag : false
    });

    $('.link_bigger ul li').hover(function(){
        $('.link_bigger ul li').find('.hidden_list').addClass('animated fadeIn');
    },function(){
        $('.link_bigger ul li').find('.hidden_list').removeClass('animated fadeIn');
    });


    //$( ".locate_list li" ).each(function(index,element){
    //
    //});
    //$( '.locate_list li' ).click(function() {
    //
    //});

    //для изображение в слайдере
    $('.mini_slider_btn li').click(function(e){
        $('.mini_slider_btn li').removeClass('active');
        $(this).addClass('active');
    });

    //для изображение в карте
    $('.locate_list li').click(function(e){
        $('.locate_list li').removeClass('active');
        $(this).addClass('active');
        $('.circle_img').removeClass('open');
    });

    $('.locate_list li:nth-child(2)').click(function(){
        $('.circle_img1').addClass('open');
    });
    $('.locate_list li:nth-child(1)').click(function(){
        $('.circle_img2').addClass('open');
    });
    $('.locate_list li:nth-child(3)').click(function(){
        $('.circle_img3').addClass('open');
    });
    $('.locate_list li:nth-child(4)').click(function(){
        $('.circle_img4').addClass('open');
    });
    $('.locate_list li:nth-child(5)').click(function(){
        $('.circle_img5').addClass('open');
    });
    $('.locate_list li:nth-child(6)').click(function(){
        $('.circle_img6').addClass('open');
    });

    $('#carousel_zoom').carousel({
        pause: true,
        interval: false
    });

    $('#carousel_zoom2').carousel({
        pause: true,
        interval: false
    });

    $('#carousel5, #carousel52, #carousel53').carousel({
        pause: true,
        interval: false
    });


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // код для мобильных устройств
        console.log(navigator.userAgent);
    } else {
        // код для обычных устройств
    }


    if (navigator.userAgent.search(/iPhone/ ) > -1) {
        console.log('player');
        $('.bg_bg').css('display','none');
        $('.playing').css('display','none');
    }
    /**/
    //function fix_menu(element, top){
    //    var width = element.width();
    //    var left = element.offset().left;
    //    if($(window).scrollTop() > top){
    //        element.css({
    //            width: width,
    //            left: left,
    //            top: 80,
    //            position: 'fixed',
    //            'z-index': '111'
    //        });
    //    }else{
    //        element.css({
    //            left: '',
    //            top: '',
    //            position: 'relative'
    //        });
    //    }
    //}


});
(function($) {$.fn.animated = function(inEffect, outEffect) {$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {if (dir === "down") {$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");} else {$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");};}, {offset: "80%"}).waypoint(function(dir) {if (dir === "down") {$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");} else {$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");};}, {offset: -$(window).height()});};})(jQuery);
/*
 JS Modified from a tutorial found here:
 http://www.inwebson.com/html5/custom-html5-video-controls-with-jquery/

 I really wanted to learn how to skin html5 video.
 */