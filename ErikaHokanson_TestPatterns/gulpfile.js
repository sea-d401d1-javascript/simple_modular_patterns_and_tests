var gulp = require('gulp'); // eslint-disable-line
var eslint = require('gulp-eslint'); // eslint-disable-line
var mocha = require('gulp-mocha'); // eslint-disable-line

var files = ['gulpfile.js', 'greet.js', 'hello_world.js', './test/greet-test.js'];
gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha', function () {
  return gulp.src('./test/greet-test.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ['lint', 'mocha']);
