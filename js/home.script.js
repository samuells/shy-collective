const initHome = function() {
  $(document).foundation();

  if (document.querySelector('.home-offer')) {
    var $homeOffer = $('.home-offer');
    $homeOffer.on('click', 'a:not(.choosed)', function(event) {
      event.preventDefault();
      $('a.choosed').removeClass('choosed');
      $(this).addClass('choosed');
      $homeOffer.children('.' + $(this).data('lightbox')).addClass('showed').siblings().removeClass('showed');
    });
    if (Foundation.MediaQuery.atLeast('large')) {
      $homeOffer.on('mouseover', 'a:not(.choosed)', function(event) {
        event.preventDefault();
        $('a.choosed').removeClass('choosed');
        $(this).addClass('choosed');
        $('.choose').addClass('visually-hidden');
        $homeOffer.children('.' + $(this).data('lightbox')).addClass('showed').siblings().removeClass('showed');
      });
    }
    // $homeOffer.on('click', 'a.choosed[data-lightbox]', lity);
    $homeOffer.on('click', 'a.choosed[data-lightbox]', function(event) {
      event.preventDefault();
      var $this= $(this);
      $this.find('.label').addClass('loading');
      setTimeout(function() {
        lity($this.attr('href'));
        $this.find('.label').removeClass('loading');
      }, 1000);
    });
    console.log('Home ignited');
  }
}

jQuery(function($) {
  'user strict';
  initHome();
});
