var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!**/node_modules/**'])
    .pipe(eslint({
      'rules': {
        'indent': [2, 2],
        'quotes': [2, 'single'],
        'semi': [2, 'always']
      },
      'env': {
        'es6': true,
        'node': true,
        'browser': true
      },
      'extends': 'eslint:recommended',
      'global': {
        'describe': true,
        'it': true,
        'before': true,
        'after': true,
        'beforeEach': true,
        'afterEach': true
      }
    }))
    .pipe(eslint.format());
});

gulp.task('test', function() {
  return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha());
});

gulp.watch(['**/*', '!package.json'], ['default']);

gulp.task('default', ['lint', 'test']);
