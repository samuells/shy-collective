// ==================
// Requirements
// ==================
const gulp = require('gulp');
const pug = require('gulp-pug2');
// ==================
// OPTIMIZING
// ==================
gulp.task('pug:compile', function() {
  return gulp.src('./pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('.'));
});
