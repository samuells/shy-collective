'use strict';

// ==================
// Requirements
// ==================
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');

// ==================
// SASS TASK
// ==================
gulp.task('sass', function() {
  return gulp.src('./sass/styles.scss')
    .pipe(sass({
      includePaths: [
        'sass/custom/',
        'node_modules/'
      ]
    }).on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./css'));
});

// ==================
// CSS TASK
// ==================
gulp.task('css:min', function() {
  var processors = [
    autoprefixer({
      browsers: ['last 2 version']
    }),
    cssnano({
      options: {
        safe: true
      },
      autoprefixer: false,
      discardComments: {
        removeAll: true
      },
      colormin: true,
      zindex: false
    })
  ];
  return gulp.src('./css/styles.css')
    .pipe(postcss(processors))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'));
});
