const initSmoothState = function() {
  'use strict';
  var $page = $('#main'),
    options = {
      debug: true,
      anchors: 'a.js-smooth-link',
      prefetch: true,
      cacheLength: 2,
      onStart: {
        duration: 2000, // Duration of our animation
        render: function($container) {
          // Add your CSS animation reversing class
          $container.addClass('is-exiting');
          // Restart your animation
          smoothState.restartCSSAnimations();
        }
      },
      onReady: {
        duration: 0,
        render: function($container, $newContent) {
          // Remove your CSS animation reversing class
          $container.removeClass('is-exiting');
          // Inject the new content
          $container.html($newContent);
        }
      },
      onAfter: function() {
        console.log('onAfter');
        initHome();
        initNavbar();
        initProjects();
        initDetail();
      }
    },
    smoothState = $page.smoothState(options).data('smoothState');
    return smoothState;
};

var smoothState; // global smoothState

jQuery(function($) {
  'user strict';
  smoothState = initSmoothState();
});
