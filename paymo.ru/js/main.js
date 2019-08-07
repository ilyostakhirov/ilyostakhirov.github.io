$(window).on("load resize",function(e){


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



});