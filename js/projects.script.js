const initProjects = function() {
  $(document).foundation();

  if (document.querySelector('.page--projects')) {
    var $thumbnailsList = $('.thumbnails-list');
    var $projectsList = $('.projects-list');
    $projectsList.on('click', 'a:not(.choosed)', function(event) {
      event.preventDefault();
      $('a.choosed').removeClass('choosed');
      $(this).addClass('choosed');
    });
    if (Foundation.MediaQuery.atLeast('xlarge')) {
      $projectsList.on('mouseover', 'a:not(.choosed)', function(event) {
        event.preventDefault();
        $('a.choosed').removeClass('choosed');
        $(this).addClass('choosed');
        $thumbnailsList.find('.showed').removeClass('showed');
        $($thumbnailsList.find('li').get($(this).closest('li').index())).addClass('showed');
      });
    }
    // $projectsList.on('click', 'a.choosed', function(event) {
    //   event.preventDefault();
    //   // smoothState.load('./niro-project-v1.html');
    // });

    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });

    console.log('Projects ignited');
  }
}

jQuery(function($) {
  'user strict';
  initProjects();
});
