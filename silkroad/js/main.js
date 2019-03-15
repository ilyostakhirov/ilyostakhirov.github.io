$('#my-element').data('datepicker');



$(document).ready(function() {
    var spinner = $('.adults');
    if (spinner && spinner.TouchSpin) {
        $('.adults').TouchSpin({
            min: 1,
            max: 15,
            stepintervaldelay: 500,
            postfix: "взрослый",
            postfix_extraclass: "adults"
        });
    }

    var spinner = $('.children');
    if (spinner && spinner.TouchSpin) {
        $('.children').TouchSpin({
            min: 0,
            max: 15,
            stepintervaldelay: 500,
            postfix: "ребенок (до 12 лет)",
            postfix_extraclass: "children"
        });
    }

    var spinner = $('.baby');
    if (spinner && spinner.TouchSpin) {
        $('.baby').TouchSpin({
            min: 0,
            max: 15,
            stepintervaldelay: 500,
            postfix: "Младенцы (до 2 лет)",
            postfix_extraclass: "baby"
        });
    }
});



$(document).ready(function(e) {
    $('.additional-fields .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.type-fly').text(concept);
    });
});




let burger = document.getElementById('burger'),
    nav = document.getElementById('main-nav');

burger.addEventListener('click', function(e) {
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
    burger.dispatchEvent(clickEvent);

    setTimeout(function() {
        burger.dispatchEvent(clickEvent);

        setTimeout(function() {
            slowmo.dispatchEvent(clickEvent);
        }, 3500);
    }, 5500);
});