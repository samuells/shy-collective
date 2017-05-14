'use strict';

// ==================
// Requirtements
// ==================
const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const rename = require('gulp-rename');

// ==================
// SVG MIN
// ==================
gulp.task('svg:min', function() {
  return gulp.src([
      'svg/**/*.svg',
      '!svg/**/dist/*.svg'
    ])
    .pipe(svgmin())
    .pipe(rename(function(path) {
      path.dirname += "/dist";
    }))
    .pipe(gulp.dest("./svg"));
});

// ==================
// SVG ICONFONT
// ==================
gulp.task('iconfont', function(){
  return gulp.src(['svg/icons/dist/*.svg'])
    .pipe(iconfontCss({
      fontName: 'iconfont',
      path: './sass/templates/_theme-iconfont.bootstrap.scss',
      targetPath: '../sass/iconfont/_iconfont.scss',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: 'iconfont',
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg']
     }))
    .pipe(gulp.dest('./fonts'));
});
