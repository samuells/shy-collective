// // ==================
// // Requirements
// // ==================
// const gulp = require('gulp');
// const imageOpt = require('gulp-image');
//
// // ==================
// // OPTIMIZING
// // ==================
// gulp.task('img:opt', function() {
//   return gulp.src('./images/**/*')
//     .pipe(imageOpt({
//       pngquant: true,
//       optipng: false,
//       zopflipng: true,
//       jpegRecompress: false,
//       jpegoptim: true,
//       mozjpeg: true,
//       gifsicle: true,
//       svgo: true,
//       concurrent: 10
//     }))
//     .pipe(gulp.dest('./assets/images'));
// });
