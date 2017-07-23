const initHome = function() {
  $(document).foundation();

  if (document.querySelector('.home-offer')) {
    var $homeOffer = $('.home-offer');
    $homeOffer.on('click', 'li:not(.choosed) a', function(event) {
      event.preventDefault();
      $('li.choosed a').off('click');
      $('li.choosed').removeClass('choosed');
      $(this).closest('li').addClass('choosed');
      $homeOffer.children('.' + $(this).data('lightbox')).addClass('showed').siblings().removeClass('showed');
      $(this).on('click', function(event){
        event.preventDefault();
        var $this= $(this);
        console.log('click');
        $this.closest('li').addClass('loading');
        // if (!Foundation.MediaQuery.atLeast('xlarge')) {
        //   setTimeout(function() {
        //     lity($this.attr('href'));
        //     $this.closest('li').removeClass('loading');
        //   }, 0);
        // }
      });
    });
    if (Foundation.MediaQuery.atLeast('xlarge')) {
      $homeOffer.on('mouseover', 'li:not(.choosed) a', function(event) {
        event.preventDefault();
        $('li.choosed a').off('click');
        $('li.choosed').removeClass('choosed');
        $(this).closest('li').addClass('choosed');
        $('.choose').addClass('visually-hidden');
        $homeOffer.children('.' + $(this).data('lightbox')).addClass('showed').siblings().removeClass('showed');
        $(this).on('click', function(event){
          event.preventDefault();
          var $this= $(this);
          console.log('click');
          $this.closest('li').addClass('loading');
          setTimeout(function() {
            lity($this.attr('href'));
            $this.closest('li').removeClass('loading');
            $('.lity.lity-hidden').remove();
          }, 2000);
        });
      });
      $homeOffer.on('mouseleave', 'li.choosed a', function(event) {
        $(this).closest('li').removeClass('choosed');
      });
      setTimeout(function() {
        $('.choose').addClass('shaking');
        $('.menu-trigger').addClass('rotate');
      }, 5200);
    }
    console.log('Home ignited');
  }
}

jQuery(function($) {
  'user strict';
  initHome();
});
