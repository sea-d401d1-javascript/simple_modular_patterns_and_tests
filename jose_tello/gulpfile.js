var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha  = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src(['test/*.js'])
    .pipe(mocha());
});

gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!node_modules/**', '!package.json'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  return gulp.watch(['lib/*.js', 'test/*.js'], ['lint', 'test']);
});

gulp.task('default', ['lint', 'test']);