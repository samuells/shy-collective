const initHome = function() {
  $(document).foundation();

  if (document.querySelector('.home-offer')) {
    var $homeOffer = $('.home-offer');
    $homeOffer.on('click', 'li:not(.choosed) a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('li.choosed a').off('click');
      $('li.choosed').removeClass('choosed');
      $(this).closest('li').addClass('choosed');
      $homeOffer.children('.' + $(this).data('lightbox')).addClass('showed').siblings().removeClass('showed');
      $(this).on('click', function(event){
        event.preventDefault();
        var $this= $(this);
        console.log('click');
        $this.closest('li').addClass('loading');
        setTimeout(function() {
          lity($this.attr('href'));
          $this.closest('li').removeClass('loading');
        }, 0);
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
          }, 1500);
        });
      });
    }
    // $homeOffer.on('click', 'a.choosed[data-lightbox]', lity);
    // $('li.choosed').on('click', 'a[data-lightbox]', function(event) {
    // // $homeOffer.on('click', 'li.choosed a[data-lightbox]', function(event) {
    //   event.preventDefault();
    //   var $this= $(this);
    //   console.log('click');
    //   $this.closest('li').addClass('loading');
    //   setTimeout(function() {
    //     lity($this.attr('href'));
    //     $this.closest('li').removeClass('loading');
    //   }, 200);
    // });
    console.log('Home ignited');
  }
}

jQuery(function($) {
  'user strict';
  initHome();
});

//
// if (document.querySelector('.home-offer')) {
//   var $homeOffer = $('.home-offer');
//   $homeOffer.on('click', 'a:not(.choosed)', function(event) {
//     event.preventDefault();
//     $('a.choosed').removeClass('choosed');
//     $(this).addClass('choosed');
//     $homeOffer.children('.' + $(this).data('lightbox')).addClass('showed').siblings().removeClass('showed');
//   });
//   if (Foundation.MediaQuery.atLeast('large')) {
//     $homeOffer.on('mouseover', 'a:not(.choosed)', function(event) {
//       event.preventDefault();
//       $('a.choosed').removeClass('choosed');
//       $(this).addClass('choosed');
//       $('.choose').addClass('visually-hidden');
//       $homeOffer.children('.' + $(this).data('lightbox')).addClass('showed').siblings().removeClass('showed');
//     });
//   }
//   // $homeOffer.on('click', 'a.choosed[data-lightbox]', lity);
//   $homeOffer.on('click', 'a.choosed[data-lightbox]', function(event) {
//     event.preventDefault();
//     var $this= $(this);
//     $this.find('.label').addClass('loading');
//     setTimeout(function() {
//       lity($this.attr('href'));
//       $this.find('.label').removeClass('loading');
//     }, 1000);
//   });
//   console.log('Home ignited');
// }
