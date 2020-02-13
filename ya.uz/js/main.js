$(document).ready(function () {
    $(function () {
        $("#datepicker").datepicker({firstDay: 1});
    });
    $('.owl-theme').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        animateOut: 'fadeOut'
    })


    $(".popular_news").niceScroll({
        cursorwidth:4,
        cursoropacitymin:0.4,
        cursorcolor:'#2e4780',
        cursorborder:'none',
        cursorborderradius:5,
        background:"rgba(20,20,20,0.3)",
    });
})
