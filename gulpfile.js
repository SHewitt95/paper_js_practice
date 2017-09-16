#!/usr/bin/env node

const gulp = require('gulp')
const webserver = require('gulp-webserver')

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['webserver']);


