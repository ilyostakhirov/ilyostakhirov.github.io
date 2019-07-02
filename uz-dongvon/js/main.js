var min = 16,
    max = 30;

function makeNormal() {
    $('html').removeClass('blackAndWhite blackAndWhiteInvert');
    $.removeCookie('specialView', {
        path: 'default.htm'
    });
}

function makeBlackAndWhite() {
    makeNormal();
    $('html').addClass('blackAndWhite');
    $.cookie("specialView", 'blackAndWhite', {
        path: 'default.htm'
    });
}

function makeBlackAndWhiteDark() {
    makeNormal();
    $('html').addClass('blackAndWhiteInvert');
    $.cookie("specialView", 'blackAndWhiteInvert', {
        path: 'default.htm'
    });
}




$(document).ready(function() {
    var appearance = $.cookie("specialView");
    switch (appearance) {
        case 'blackAndWhite':
            makeBlackAndWhite();
            break;
        case 'blackAndWhiteInvert':
            makeBlackAndWhiteDark();
            break;
    }

    $('.spcNormal').click(function() {
        makeNormal();
    });
    $('.spcWhiteAndBlack').click(function() {
        makeBlackAndWhite();

    });

});

$(document).ready(function() {
    $('#incfont').click(function() {
        curSize = parseInt($('.text,.title,.abt,.media-heading a,.media-body p,body .nav-tabs > li > a,.media-body p,body .nav-tabs > li > a,.date,.tabs .tab-content a,.news ul li a,.title1,.carstab .nav-tabs > li > a span,.zapchasi li span,.navbar-inverse .navbar-nav > li > a,.navbar-inverse .nav-lang>li>a,.top-tab .checkbox,.form-control,.footer-menu li a,.tel strong,.tel span,.copyright,.statable > tbody > tr > td.datet,.media-body p,body .nav-tabs > li > a,.date,.tabs .tab-content a,.news ul li a,.title1,.carstab .nav-tabs > li > a span,.zapchasi li span,.navbar-inverse .navbar-nav > li > a,.navbar-inverse .nav-lang>li>a,.top-tab .checkbox,.form-control').css('font-size')) + 2;
        if (curSize <= 20)
            $('.text,.title,.abt,.media-heading a,.media-body p,body .nav-tabs > li > a,.media-body p,body .nav-tabs > li > a,.date,.tabs .tab-content a,.news ul li a,.title1,.carstab .nav-tabs > li > a span,.zapchasi li span,.navbar-inverse .navbar-nav > li > a,.navbar-inverse .nav-lang>li>a,.top-tab .checkbox,.form-control,.footer-menu li a,.tel strong,.tel span,.copyright,.statable > tbody > tr > td.datet').css('font-size', curSize);
    });
    $('#decfont').click(function() {
        curSize = parseInt($('.text,.title,.abt,.media-heading a,.media-body p,body .nav-tabs > li > a,.media-body p,body .nav-tabs > li > a,.date,.tabs .tab-content a,.news ul li a,.title1,.carstab .nav-tabs > li > a span,.zapchasi li span,.navbar-inverse .navbar-nav > li > a,.navbar-inverse .nav-lang>li>a,.top-tab .checkbox,.form-control,.footer-menu li a,.tel strong,.tel span,.copyright,.statable > tbody > tr > td.datet').css('font-size')) - 2;
        if (curSize >= 12)
            $('.text,.title,.abt,.media-heading a,.media-body p,body .nav-tabs > li > a,.media-body p,body .nav-tabs > li > a,.date,.tabs .tab-content a,.news ul li a,.title1,.carstab .nav-tabs > li > a span,.zapchasi li span,.navbar-inverse .navbar-nav > li > a,.navbar-inverse .nav-lang>li>a,.top-tab .checkbox,.form-control,.footer-menu li a,.tel strong,.tel span,.copyright,.statable > tbody > tr > td.datet').css('font-size', curSize);
    });
});

$('#incfont,#decfont,.search-query,#custom-search-input .btn,.squareBox').click(function(e) {
    e.stopPropagation();
});
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(window).load(function(){
$('img.bgfade').hide();
function anim() {
    $(".slider img.bgfade").first().appendTo('.slider').fadeOut(1500);
    $(".slider img").first().fadeIn(1500);
    setTimeout(anim, 7000);
}
anim();})
$('.slider').css({'height': $('.slider img').innerHeight()});
