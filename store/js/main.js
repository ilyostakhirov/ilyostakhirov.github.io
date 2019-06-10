window.onscroll = function() { myFunction() };


var nav = document.getElementById("nav");
var header = document.getElementById('header');

var sticky = nav.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
        header.classList.add("sticky_header");
    } else {
        nav.classList.remove("sticky");
        header.classList.remove("sticky_header");
    }
}


(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

$('.products').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: false,
  arrows: false,
});