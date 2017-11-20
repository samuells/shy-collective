const initHome = function() {
  $(document).foundation();

  vhCheck('ios-gap');

  if (document.querySelector('.home-offer')) {
    var $homeOffer = $('.home-offer');
    if (!Foundation.MediaQuery.atLeast('xlarge')) {
      setTimeout(function() {
        var manifestImgList = $('.manifest-img');
        var randomIndex = Math.floor(Math.random() * manifestImgList.length);
        $(manifestImgList[randomIndex]).addClass('showed');
      }, 1000);

      $homeOffer.on('click', 'li a', function(event) {
        event.preventDefault();
        lity($(this).attr('href'));
      });
    }
    else if (Foundation.MediaQuery.atLeast('xlarge')) {
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
    }
    console.log('Home ignited');
  }
}

jQuery(function($) {
  'user strict';
  initHome();
});
