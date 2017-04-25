jQuery(function($) {
  'user strict';

  if (document.querySelector('.home-offer')) {
    var $homeOffer = $('.home-offer');
    $homeOffer.on('click', 'a:not(.choosed)', function(event) {
      event.preventDefault();
      $('a.choosed').removeClass('choosed');
      $(this).addClass('choosed');
      $homeOffer.children('.' + $(this).data('lightbox')).addClass('showed').siblings().removeClass('showed');
    });
    $homeOffer.on('click', 'a.choosed[data-lightbox]', lity);
  }
});
