// ==================
// Requirements
// ==================
const gulp = require('gulp');
const pug = require('gulp-pug2');
// ==================
// HTML GENERATION
// ==================
gulp.task('pug:compile', function() {
  return gulp.src('./pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('.'));
});
