var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('m-test', function() {
  return gulp.src(['test/test-*.js'], { read: false })
  .pipe(mocha({
    reporter: 'spec',
    globals: {
      should: require('should')
    }
  }));
});

gulp.task('mocha', function() {
  return gulp.src(['test/*.js'], { read: false })
  .pipe(mocha({ reporter: 'list' }))
  .on('error', gutil.log);
});

gulp.task('watch-mocha', function() {
  gulp.watch(['lib/**', 'test/**'], ['mocha']);
});
var files = ['**', '**/*'];

gulp.task('lint', function(){
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('default', ['lint', 'm-test', 'mocha', 'watch-mocha']);
