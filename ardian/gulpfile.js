var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var files = ['gulpfile.js', './lib/greet.js', 'hello.js', './test/hello_test.js'];
gulp.task('lint', function(){
  return gulp.src(files)
  .pipe(eslint({
    'rules': {
      'indent': [
        2,
        2
      ],
      'quotes': [
        2,
        'single'
      ],
      'linebreak-style': [
        2,
        'unix'
      ],
      'semi': [
        2,
        'always'
      ]
    },
    'env': {
      'es6': true,
      'node': true,
      'browser': true
    },
    'extends': 'eslint:recommended',
    'ecmaFeatures': {
      'jsx': true,
      'experimentalObjectRestSpread': true
    },
    'plugins': [
      'react'
    ]
  }))
  .pipe(eslint.format());

});

gulp.task('mocha', function() {
  return gulp.src('test/*.js')
  .pipe(mocha());

});

gulp.task('watch', function() {
  return gulp.watch(files, ['lint', 'mocha']);
});

gulp.task('default', ['watch', 'lint', 'mocha']);
