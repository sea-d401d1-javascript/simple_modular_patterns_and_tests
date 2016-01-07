var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var files = ['lib/*.js', 'test/*.js', 'gulpfile.js'];

gulp.task('mocha', function() {
  return gulp.src('test/*.js')
  .pipe(mocha());
});

gulp.task('lint', function() {
  return gulp.src(files)
  .pipe(eslint({
    extends: 'eslint:recommended',
    ecmaFeatures: {
      modules: true
    },
    rules: {
      'indent': 2,
      'quotes': [2, 'single'],
      'linebreak-style': 2,
      'no-unused-vars': 0,
      'no-undef': 0,
      'no-path-concat': 0,
      'semi': 2
    },
    env: {
      es6: true,
      browser: true,
      node: true
    }
  }))
  .pipe(eslint.format());
});

gulp.task('default', ['lint', 'mocha'], function() {
  gulp.watch(files, function() {
    gulp.run('lint');
  });
});
