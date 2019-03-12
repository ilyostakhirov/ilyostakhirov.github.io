var $amountrangeslider = $('#amount-range');
var $amount = $('#amount-input');
var $monthsrangeslider = $('#months-range');
var $monthamount = $('#months-input');

$amountrangeslider
  .rangeslider({
    polyfill: false
  })
  .on('input', function() {
    $amount[0].value = this.value;
  });

$amount.on('input', function() {
  $rangeslider.val(this.value).change();
});


$monthsrangeslider
  .rangeslider({
    polyfill: false
  })
  .on('input', function() {
    $monthamount[0].value = this.value;
  });

$monthamount.on('input', function() {
  $monthsrangeslider.val(this.value).change();
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
            //the 205 is a fixed header offset
          scrollTop: target.offset().top - 205
        }, 1000);
        return false;
      }
    }
  });
});