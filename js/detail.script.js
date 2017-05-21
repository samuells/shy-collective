var initDetail = function(){
  if (document.querySelector('.page--detail-v1')) {
    var $pageDetail = $('.page--detail-v1');
    $pageDetail.on('click', 'a[data-lightbox]', lity);
    if (document.querySelector('.photo-gallery')) {
      initPhotoSwipeFromDOM('.photo-gallery');
    }
  }
};

jQuery(function($) {
  'user strict';
  initDetail();
});
