var jshint = require('gulp-jshint');
var gulp = require('gulp');

var files = ['gulpfile.js', './lib/greet.js', 'hello.js', './test/hello_test.js'];
gulp.task('lint', function() {
  return gulp.src(files)
   .pipe(jshint())
    .pipe(jshint.reporter());
});

gulp.task('default', ['lint']);
