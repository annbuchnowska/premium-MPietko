jQuery(document).ready(function(){
  jQuery('#slider').slippry()
});

$(function() {
  var pull = $('#pull');
  menu = $('nav ul');
  menuHeight = menu.height();

  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function(){
    var w = $(window).width();
    if(w > 720 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});


// Slippry slider

$(function() {
  var homeSlider = $("#homeSlider").slippry({
    transition: 'fade',
    useCSS: true,
    speed: 1000,
    pause: 2000,
    controls: false,
    preload: 'visible',
    autoHover: false,
    pager: false
  });

  $('.stop').click(function () {
    homeSlider.stopAuto();
  });

  $('.start').click(function () {
    homeSlider.startAuto();
  });

  $('.prev').click(function () {
    homeSlider.goToPrevSlide();
    return false;
  });
  $('.next').click(function () {
    homeSlider.goToNextSlide();
    return false;
  });
  $('.reset').click(function () {
    homeSlider.destroySlider();
    return false;
  });
  $('.reload').click(function () {
    homeSlider.reloadSlider();
    return false;
  });
  $('.init').click(function () {
    homeSlider = $("#homeSlider").slippry();
    return false;
  });
});
