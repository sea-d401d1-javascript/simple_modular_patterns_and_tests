var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

var files = ['gulpfile.js', 'greet.js', 'hello_world.js', './test/greet_test.js'];
gulp.task('mocha', function() {
  return gulp.src(files, {read: false})
    .pipe(mocha( {reporter: 'nyan'}));
});

gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter());
});

gulp.task('default', ['mocha', 'jshint']);
