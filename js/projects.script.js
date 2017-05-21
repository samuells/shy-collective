const initProjects = function() {
  $(document).foundation();

  if (document.querySelector('.page--projects')) {
    var $projectsList = $('.projects-list');
    $projectsList.on('click', 'a:not(.choosed)', function(event) {
      event.preventDefault();
      $('a.choosed').removeClass('choosed');
      $(this).addClass('choosed');
    });
    if (Foundation.MediaQuery.atLeast('large')) {
      $projectsList.on('mouseover', 'a:not(.choosed)', function(event) {
        event.preventDefault();
        $('a.choosed').removeClass('choosed');
        $(this).addClass('choosed');
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
