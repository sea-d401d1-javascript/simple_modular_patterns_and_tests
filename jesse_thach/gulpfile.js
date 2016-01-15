var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var files = ['gulpfile.js', './scripts/*.js', './test/greet_test.js',
 '!node_modules/**', '!*.json'];

gulp.task('lint', function() {
  return gulp.src(files)
  .pipe(eslint(
    {// eslint-disable-line
      'extends': 'google'
    }
  ))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('mocha', function() {
  return gulp.src('test/greet_test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}))
  .pipe(mocha({timeout: 2000}));
});

gulp.task('watch', function() {
  return gulp.watch(files, ['lint']);
});

gulp.task('default', ['watch', 'lint', 'mocha']);
