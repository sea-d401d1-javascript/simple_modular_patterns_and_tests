var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var gulp = require('gulp');

var files = ['gulpfile.js', './lib/greet.js', 'hello.js', './test/hello_test.js'];
gulp.task('lint', function() {
  return gulp.src(files)
   .pipe(jshint())
    .pipe(jshint.reporter());
});

gulp.task('mocha', function() {
  return gulp.src('test/*.js')
  .pipe(mocha());

});

gulp.task('watch', function() {
 return gulp.watch(files, ['lint', 'mocha']);
});

gulp.task('default', ['watch', 'lint', 'mocha']);
