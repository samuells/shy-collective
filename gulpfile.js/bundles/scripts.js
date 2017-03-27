// 'use strict';
//
// // ==================
// // Requirtements
// // ==================
// const gulp = require('gulp');
// const concat = require('gulp-concat');
// const rename = require('gulp-rename')
// const uglify = require('gulp-uglify');
// const include = require('gulp-include');
// const replace = require('gulp-replace');
//
// // ==================
// // JS TASK
// // ==================
// gulp.task("js:min", function() {
//   return gulp.src("js/scripts.index.js")
//     .pipe(include({
//       includePaths: [
//         "./components/**/*",
//         "./js-src/",
//         "./node_modules/jquery/**/*",
//         "./node_modules/autosize/**/*",
//         "./node_modules/owl.carousel/**/*"
//       ]
//     }))
//     .on('error', console.log)
//     .pipe(concat('scripts.all.js'))
//     .pipe(gulp.dest("./public/js"))
//     .pipe(uglify().on('error', console.log))
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest("./public/js"));
// });
