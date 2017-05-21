const initNavbar = function() {
  if (document.querySelector('.nav-header')) {
    var $navHeader = $('.nav-header');
    $navHeader.on('click', 'a#js-toggle-menu', function(event) {
      event.preventDefault();
      $navHeader.toggleClass('menu-showed');
    });
  }
}

jQuery(function($) {
  'user strict';
  initNavbar();
});
