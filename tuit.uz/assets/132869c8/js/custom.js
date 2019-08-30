$(document).ready(function () {
//Font size -
    $('.tt_optionlist > li > a.txt_min').click(function () {
        if ($(this).hasClass('current')) {
            $(this).removeClass('current');
            $.cookie('html_font', '', {path: 'default.htm'});
            $('html').removeClass('font_minus');
        } else {
            $(this).addClass('current');
            $.cookie('html_font', 'font_minus', {path: 'default.htm'});
            $('html').removeClass('font_plus').addClass('font_minus');
            $('.tt_optionlist > li > a.font_plus').removeClass('current');
        }
        return false;
    });

//Font size +
    $('.tt_optionlist > li > a.txt_max').click(function () {
        if ($(this).hasClass('current')) {
            $(this).removeClass('current');
            $.cookie('html_font', '', {path: 'default.htm'});
            $('html').removeClass('font_plus');
        } else {
            $(this).addClass('current');
            $.cookie('html_font', 'font_plus', {path: 'default.htm'});
            $('html').removeClass('font_minus').addClass('font_plus');
            $('.tt_optionlist > li > a.font_minus').removeClass('current');
        }
        return false;
    });


//Black yellow
    $('.tt_optionlist > li > a.orange').click(function () {
        if ($(this).hasClass('current')) {
            $(this).removeClass('current');
            $.cookie('html_color', '', {path: 'default.htm'});
            $('html').removeClass('yellow');
        } else {
            $(this).addClass('current');
            $.cookie('html_color', 'yellow', {path: 'default.htm'});
            $('html').removeClass('white').addClass('yellow');
            $('.tt_optionlist > li >a.white').removeClass('current');
        }
        return false;
    });

//Black white
    $('.tt_optionlist > li > a.txt_white').click(function () {
        if ($(this).hasClass('current')) {
            $(this).removeClass('current');
            $.cookie('html_color', '', {path: 'default.htm'});
            $('html').removeClass('white');
        } else {
            $(this).addClass('current');
            $.cookie('html_color', 'white', {path: 'default.htm'});
            $('html').removeClass('yellow').addClass('white');
            $('.tt_optionlist > li > a.orange').removeClass('current');
        }
        return false;
    });
    $(".tt_soclist").jsSocials({
        showLabel: false,
        showCount: false,
        shares: ["facebook"]
    });
//Share buttons
    $("#sharer").jsSocials({
        showLabel: false,
        shares: [
            {
                share: 'facebook',
                logo: 'icon icon-social-fb',
            },
            {
                share: 'twitter',
                logo: 'icon icon-social-tw'
            },
            {
                share: 'googleplus',
                logo: 'icon icon-social-gp'
            },
            {
                share: 'email',
                logo: 'icon icon-social-ml'
            },
            {
                share: 'whatsapp',
                logo: 'icon icon-social-wup'
            },
            {
                share: 'telegram',
                logo: 'icon icon-social-tg'
            },
        ]
    });

    $('.mobile-phone').formatter({
        'pattern': '+(998) {{99}} {{999}}-{{99}}-{{99}}',
        'persistent': true
    });


    $('.appeal').formatter({
        'pattern': '{{999}}-{{999}}-{{999}}',
        'persistent': true
    });

    // Placeholder
    $('input[placeholder], textarea[placeholder]').placeholder();


    //Menu Additions
    function windowSize() {
        var headerH = $(window).height();
        if ($(window).width() >= '767') {
            $('.tt_navlist > li > a.dropdown-toggle').removeAttr('data-toggle', 'dropdown').unbind();
        } else {
            headerH -= $('.js-header').height();
            $('.tt_navlist > li > a.dropdown-toggle').attr('data-toggle', 'dropdown').unbind();
        }
        console.log(headerH);
        $('.js-header-bg').height(headerH + 'px');
    }

    $(window).on('load resize', windowSize);
    
    $(window).on('load scroll', function() {
        var ttHeader = $(".js-header");  
        if ($(window).width() > 768) {
            var scroll = $(window).scrollTop();
            if (scroll >= 10) {
                ttHeader.css({
                    top: -$('.tt_topline').height() + 'px'
                });
                ttHeader.addClass("tt-header--white");
            } else {
                ttHeader.css({
                    top: 0
                })
                ttHeader.removeClass("tt-header--white");
            }
        } else {
            ttHeader.addClass("tt-header--white");
        }
    });

    $("a[href='#bottom']").click(function() {
        $("html, body").animate({ scrollTop: $(window).height()-$('.tt_headline').height() }, "slow");
        return false;
    });

    //Topmenuaccord
    function topmenuaccord() {
        if ($(window).width() <= '991') {
            $('.tt_menucol h4 a').click(function (e) {
                e.preventDefault();
                if ($(this).hasClass('current')) {
                    $('.tt_submenulist').slideUp(400);
                    $(this).parent().next('ul').slideUp(400);
                } else {
                    $('.tt_menucol h4 a').removeClass('current');
                    $(this).addClass('current');
                    $('.tt_submenulist').slideUp(400);
                    $(this).parent().next('ul').slideDown(400);
                }
                return false;
            });
        } else {

        }
    }

    $(window).on('load resize', topmenuaccord);

    //Footmenuaccord
    function footmenuaccord() {
        if ($(window).width() <= '767') {
            $('.tt_footbl h4 a').click(function (e) {
                e.preventDefault();
                if ($(this).hasClass('current')) {
                    $('.tt_footul').slideUp(400);
                    $(this).parent().next('ul').slideUp(400);
                } else {
                    $('.tt_footbl h4 a').removeClass('current');
                    $(this).addClass('current');
                    $('.tt_footul').slideUp(400);
                    $(this).parent().next('ul').slideDown(400);
                }
                return false;
            });
        } else {
        }
    }

    $(window).on('load resize', footmenuaccord);


    //Topsearch
    $('.tt_topsearch').click(function () {
        if ($(this).hasClass('current')) {
            $(this).removeClass('current');
            $('.tt_subform').slideUp(400);
        } else {
            $(this).addClass('current');
            $('.tt_subform').slideDown(400);
        }
        return false;
    });


    //Main Slider
    $('.fullwidthbanner').revolution({
        delay: 10500,
        touchenabled: "on",
        onHoverStop: "on",
        startwidth: 1180,
        startheight: 500,
        hideThumbs: 10,
        fullWidth: "on",
        dottedOverlay: "true"
    });


    // Partner Carousel
    $(".tt_owlpartn").owlCarousel({
        items: 5,
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        lazyLoad: true,
        paginationSpeed: 400
    });


    //About slider
    $(".tt_owl_bnr").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        pagination: false,
        lazyLoad: true,
        paginationSpeed: 400,
        singleItem: true
    });


    //Count to
    $(".tt_countitem span").each(function () {
        var $this = $(this);
        $this.waypoint(function () {
            $this.countTo({
                decimals: 0,
                speed: 1500
            });
        }, {offset: '100%'});
    });


    //Fancybox
    $(".fancybox-media").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: {
                width: 75,
                height: 75
            },
            title: {
                type: 'inside'
            }
        },
        beforeLoad: function () {
            var el, id = $(this.element).data('title-id');
            if (id) {
                el = $('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });


    //Scroll arrow
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.toTop').stop().animate({
                bottom: '15px'
            }, 500);
        } else {
            $('.toTop').stop().animate({
                bottom: '-150px'
            }, 500);
        }
    });
    $('.toTop').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500, function () {
            $('.toTop').stop().animate({
                bottom: '-150px'
            }, 500);
        });
    });

    return false;

});


$(window).load(function () {
    //Form styler - new
   // $('select, input:checkbox, input:radio').styler();
});

//Click topsearch
$(document).click(function (event) {
    if ($(event.target).closest('.tt_subform').length)
        return;
    $('.tt_topsearch').removeClass('current');
    $('.tt_subform').slideUp(400);
    event.stopPropagation();
});







