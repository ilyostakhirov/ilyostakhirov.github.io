$(document).ready(function() {



    $(window).on('load resize', function() {
        var window_width = $(window).width();
        if (window_width < 991) {
            $('.flexMenu2').flexMenu({
                undo: true
            });
        } else {
            function toggleDropdown(e) {
                const _d = $(e.target).closest('.main-menu .dropdown'),
                    _m = $('.dropdown-menu', _d);
                setTimeout(function() {
                    const shouldOpen = e.type !== 'click' && _d.is(':hover');
                    _m.toggleClass('show', shouldOpen);
                    _d.toggleClass('show', shouldOpen);
                    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
                }, e.type === 'mouseleave' ? 300 : 0);
            }

            $('body')
                .on('mouseenter mouseleave', '.main-menu .dropdown', toggleDropdown)
                .on('click', '.main-menu .dropdown-menu a', toggleDropdown);

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



    var hidWidth;
    var scrollBarWidths = 40;

    var widthOfList = function() {
        var itemsWidth = 0;
        $('.list li').each(function() {
            var itemWidth = $(this).outerWidth();
            itemsWidth += itemWidth;
        });
        return itemsWidth;
    };

    var widthOfHidden = function() {
        return (($('.scrolling_tabs').outerWidth()) - widthOfList() - getLeftPosi()) - scrollBarWidths;
    };

    var getLeftPosi = function() {
        return $('.list').position().left;
    };

    var reAdjust = function() {
        if (($('.scrolling_tabs').outerWidth()) < widthOfList()) {
            $('.scroller-right').show();
        } else {
            $('.scroller-right').hide();
        }

        if (getLeftPosi() < 0) {
            $('.scroller-left').show();
        } else {
            $('.item').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow');
            $('.scroller-left').hide();
        }
    }

    reAdjust();

    $(window).on('resize', function(e) {
        reAdjust();
    });

    $('.scroller-right').click(function() {

        $('.scroller-left').fadeIn('slow');
        $('.scroller-right').fadeOut('slow');

        $('.list').animate({ left: "+=" + widthOfHidden() + "px" }, 'slow', function() {

        });
    });

    $('.scroller-left').click(function() {

        $('.scroller-right').fadeIn('slow');
        $('.scroller-left').fadeOut('slow');

        $('.list').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow', function() {

        });
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
        to: 5,
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
                $("#tarif2 .percent").addClass('sm-text').removeClass('lg-text');
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
        speed: 50000,
        autoplay: {
            delay: 0,
        },
        keyboard: {
            enabled: false
        },
    });
    swiper.mousewheel.disable();

    function checkValue(element) {
        // check if the input has any value (if we've typed into it)
        if ($(element).val())
            $(element).addClass('has-value');
        else
            $(element).removeClass('has-value');
    }


    // Run on page load
    $('.form-control').each(function() {
        checkValue(this);
    })
    // Run on input exit
    $('.form-control').blur(function() {
        checkValue(this);
    });


});