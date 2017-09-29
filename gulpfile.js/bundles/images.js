// ==================
// Requirements
// ==================
const gulp = require('gulp');
const imageOpt = require('gulp-image');
const imageResize = require('gulp-image-resize');

// ==================
// OPTIMIZING
// ==================
gulp.task('img:opt', function() {
  return gulp.src('./img/original/*')
    .pipe(imageResize({
      width: 2000,
      format : 'jpeg',
      upscale : false
    }))
    .pipe(imageOpt({
      pngquant: true,
      optipng: true,
      zopflipng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('./img/'));
});
