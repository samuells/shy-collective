const initNavbar = function() {
  if (document.querySelector('.nav-header')) {
    var $navHeader = $('.nav-header');
    $navHeader.on('click', 'a#js-toggle-menu', function(event) {
      event.preventDefault();
      $navHeader.toggleClass('menu-showed');
    });
    inactivityTime();
  }
}

var inactivityTime = function() {
  var t;
  var interval;
  window.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;

  function rotateHamburger() {
    $('.menu-wrapper').addClass('rotate');
    setTimeout(function(){
      $('.menu-wrapper').removeClass('rotate');
    }, 1400)
  }

  function resetTimer() {
    clearTimeout(t);
    $('.menu-wrapper').removeClass('rotate');
    t = setTimeout(resetInterval, 2500)
  }

  function resetInterval() {
    clearInterval(interval);
    $('.menu-wrapper').removeClass('rotate');
    t = setInterval(rotateHamburger, 6000)
  }
};

jQuery(function($) {
  'user strict';
  initNavbar();
});
