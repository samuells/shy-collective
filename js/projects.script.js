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
    $projectsList.on('click', 'a.choosed', function(event) {
      event.preventDefault();
      smoothState.load('./niro-project-v1.html');
    });
    console.log('Projects ignited');
  }
}

jQuery(function($) {
  'user strict';
  initProjects();
});
