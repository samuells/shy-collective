'use strict';

// ==================
// Requirements
// ==================
const gulp = require('gulp');
const runSequence = require('run-sequence');
require('require-dir')('./bundles'); // requires all gulp tasks

// ==================
// WATCH TASKS
// ==================
const sassFiles = [
  './sass/**/*.scss',
  './components/**/*.scss'
];
const jsFiles = [
  './js/**/*.js',
  './components/**/*.js',
  '!./js/scripts.all.js',
  '!./js/scripts.all.min.js',
];

gulp.task('watch:dev', function() {
  gulp.watch(sassFiles, function(){
    runSequence('sass', 'css:min');
  });
  gulp.watch(jsFiles, ['js:min']);
});

// ==================
// MAIN TASKS
// ==================
gulp.task('dev', function(){
  return runSequence('sass', ['css:min', 'js:min'], 'watch:dev');
});

gulp.task('default', ['dev']);
