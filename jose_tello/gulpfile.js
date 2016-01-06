var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha  = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src(['test/*.js'])
    .pipe(mocha());
});

gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!node_modules/**', '!pakcage.json'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint', 'test'], function() {
  gulp.watch(['lib/*.js', 'test/*.js'], function() {
    gulp.start(['lint']);
  });
});