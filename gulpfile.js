"use strict";

var gulp = require('gulp'),
    sass = require('gulp-dart-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'));
});

gulp.watch('./sass/**/*.scss', ['sass']);

gulp.task('default', ['sass'])