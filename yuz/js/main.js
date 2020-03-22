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

})
