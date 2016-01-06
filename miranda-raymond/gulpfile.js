var jshint = require('gulp-jshint');
var gulp = require('gulp');
var mocha = require('gulp-mocha');

var files = ['gulpfile.js', './lib/greet.js', 'hello.js', 'test/hello_test.js', '!*.json', '!node_modules/**'];

gulp.task('lint', function () {
	gulp.src(files)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('mocha', function() {
  return gulp.src('test/*.js')
    .pipe(mocha());
});

gulp.task('watch', function() {
  return gulp.watch(files, ['lint', 'mocha']);
});


gulp.task('default', ['watch', 'lint', 'mocha']);
