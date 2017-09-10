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
    $('.menu-trigger').addClass('rotate');
    setTimeout(function(){
      $('.menu-trigger').removeClass('rotate');
    }, 1400)
    // console.log('rotate start ' + new Date().getSeconds());
  }

  function resetTimer() {
    clearTimeout(t);
    clearInterval(interval);
    $('.menu-trigger').removeClass('rotate');
    t = setTimeout(resetInterval, 1000)
    // console.log('reset start ' + new Date().getSeconds());
  }

  function resetInterval() {
    clearInterval(interval);
    $('.menu-trigger').removeClass('rotate');
    interval = setInterval(rotateHamburger, 9000)
    // console.log('interaval start ' + new Date().getSeconds());
  }
};

jQuery(function($) {
  'user strict';
  initNavbar();
});
