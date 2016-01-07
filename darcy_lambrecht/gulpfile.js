var jshint = require('gulp-jshint');
var gulp = require('gulp');
var mocha = require('gulp-mocha');


var files = ['gulpfile.js', 'greet.js', 'hello_world.js', 'test/greet_test.js'];
gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('mocha', function() {
  return gulp.src(files)
    .pipe(mocha());
});

gulp.task('default', ['lint', 'mocha']);
