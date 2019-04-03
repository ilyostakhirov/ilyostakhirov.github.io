jQuery(document).ready(function($) {
  
  var $stage = $('.stage'),
  $textA = $('#customerTextA'),
  $textB = $('#customerTextB'),
  $textC = $('#customerTextC'),
  $textD = $('#customerTextD'),
  $computerA = $('#computerA'),
  $approved = $('#approved'),
  $computerB = $('#computerB'),
  $calLeft = $('#cal-left'),
  $calRight = $('#cal-right'),
  $shoppingCart = $('#shopping-cart'),
  $triangle = $('#triangle'),
  $circle = $('#circle'),
  $rectangle = $('#rectangle'),
  $customerBG = $('#customerBG');

  // initialize controller
  var controller = new ScrollMagic.Controller();
  controller.scrollTo(500);

  // build timeline with animation tweens
  var scrollAnimation = new TimelineMax();
  scrollAnimation.set($stage, {autoAlpha: 1})
  .to($textA, 0, {autoAlpha: 1, ease:Power1.easeInOut, delay:0.75}, "trans1")
  .to($customerBG, 0, {autoAlpha: 1, ease:Power1.easeInOut, delay:0.75}, "trans1")
  .to($computerA, 0, {autoAlpha: 1, ease:Power4.easeInOut, delay:0.75}, "trans1")
  .from($approved, 1, {autoAlpha: 0, ease:Power4.easeInOut})
  .to($approved, 0, {autoAlpha: 1, ease:Power1.easeInOut, delay: 2})
  .to($computerA, 1, {autoAlpha: 0, ease:Power1.easeInOut}, "trans2")
  .to($approved, 1, {autoAlpha: 0, ease:Power1.easeInOut}, "trans2")
  .to($textA, 1, {autoAlpha: 0, ease:Power1.easeInOut}, "trans2")
  .to($textB, 1, {autoAlpha: 1, ease:Power1.easeInOut}, "trans2")
  .to($computerB, 0, {autoAlpha: 1, ease:Power1.easeInOut}, "trans2")
  .to($textB, 1, {autoAlpha: 0, ease:Power1.easeInOut, delay: 3}, "trans3")
  .to($textC, 1, {autoAlpha: 1, ease:Power1.easeInOut, delay: 3}, "trans3")
  .to($calLeft, 3, {transform:"scale(1)", ease:Power3.easeInOut})
  .to($calRight, 3, {transform:"scale(1)", ease:Power3.easeInOut})
  .to($calLeft, 1, {transform:"scale(0)", ease:Power3.easeInOut, delay:1})
  .to($calRight, 1, {transform:"scale(0)", ease:Power3.easeInOut}, '-=1')
  .to($computerB, 3, {left:"400%", ease:Power4.easeInOut})
  .to($textC, 1, {autoAlpha: 0, ease:Power1.easeInOut}, "trans4")
  .to($textD, 1, {autoAlpha: 1, ease:Power1.easeInOut}, "trans4")
  .from($shoppingCart, 3, {opacity:"0", right:"400%", ease:Power4.easeInOut}, '-=3')
  .from($triangle, 3, {opacity:"0", top:"-100%", ease:Power4.easeInOut})
  .from($rectangle, 3, {opacity:"0", top:"-100%", ease:Power4.easeInOut}, '-=2.85')
  .from($circle, 3, {opacity:"0", top:"-100%", ease:Power4.easeInOut}, '-=2.85');

  // build scene and link scrolling to animation
  var scene = new ScrollMagic.Scene({triggerElement: "#how-it-works", duration: 4000})
  .setPin(".stage")
  .addTo(controller)
  .setTween(scrollAnimation);
  scene.offset(400);
});