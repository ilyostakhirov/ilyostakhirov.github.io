$(document).ready(function() {
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    })
    wow.init();

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

    $('.train-region-dropdown').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.train-region').text(concept);
    });
});


$('.selectpicker').selectpicker();

let burger = document.getElementById('burger'),
    nav = document.getElementById('main-nav');

burger.addEventListener('click', function(e) {
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

function filterSidebar() {
    function e() { a.addClass("open"), i.length || $("body").append('<div class="filter-overlay"></div>'), $("body").addClass("filters-open") }

    function o() { a.removeClass("open"), $(document).find(".filter-overlay").remove(), $("body").removeClass("filters-open") }
    var a = $("#flight-filters"),
        t = $("#open-filters"),
        i = $("body").find(".filter-overlay");
    t.on("click", function() { a.hasClass("open") ? o() : e() }), $("body").on("click", ".filter-overlay,.close-filters", function() { o() })
}
filterSidebar();
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({ html: true });

    /* Onload demo - dirty timeout */
    let clickEvent = new Event('click');


    var template = $('.repeatable-form').clone();

    //define counter
    var sectionsCount = 1;

    //add new section
    $('body').on('click', '.add-route-btn', function() {
        $('.back-date').hide();
        //increment
        sectionsCount++;
        //loop through each input
        template.show();
        var section = template.clone().find(':input').each(function() {

                //set id to store the updated section number
                var newId = this.id + sectionsCount;

                //update for label
                $(this).prev().attr('for', newId);

                //update id
                this.id = newId;

            }).end()

            //inject new section
            .appendTo('.repeateble-items');
        return false;
    });

    //remove section
    $('.repeateble-items').on('click', '.remove', function() {
        //fade out section
        $('.back-date').show();
        $(this).parent().fadeOut(300, function() {
            //remove parent element (main section)
            $(this).empty();
            return false;
        });
        return false;
    });


$(".phone").inputmask({ "mask": "+\\9\\98 (99) 999-99-99" });
$(".password").inputmask({ "mask": "AA 999 99 99" });
});