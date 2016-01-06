var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

var files = ['test/*.js', '*.js', '!node_modules/**', '!**.json'];

gulp.task('mocha', function() {
  return gulp.src('test/*.js').pipe(mocha());
});

gulp.task('eslint', function() {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', function() {
  gulp.watch(files, ['eslint', 'mocha']);
});
