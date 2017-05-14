'use strict';

// ==================
// Requirtements
// ==================
const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename')
const uglify = require('gulp-uglify');

// ==================
// JS TASK
// ==================
gulp.task("js:min", function() {
  return gulp.src([
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/lity/dist/lity.min.js",
    "./js/navbar.script.js",
    "./js/home.script.js"
  ])
  .on('error', console.log)
  .pipe(concat('scripts.all.js'))
  .pipe(gulp.dest("./js"))
  .pipe(uglify().on('error', console.log))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest("./js"));
});
