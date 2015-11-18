'use strict';

var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function() {
  livereload.listen({basePath: 'watch'});
  
  gulp.watch('watch/**/*', function(f) {
    livereload.changed(f.path);
  });
});

gulp.task('default', ['watch']);
