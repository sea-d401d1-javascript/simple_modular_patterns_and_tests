var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

var files = ['gulpfile.js', './lib/greet.js', 'hello.js', 'test/hello_test.js'];

gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha', function() {
  return gulp.src('hello_test.js' {read: false})
  .pipe(mocha());
});

gulp.task('default', ['lint', 'mocha', 'chai']);
