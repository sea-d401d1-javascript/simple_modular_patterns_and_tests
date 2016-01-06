var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!**/node_modules/**'])
    .pipe(eslint({
      'rules': {
        'indent': [2, 2],
        'quotes': [2, 'single'],
        'linebreak-style': [2, 'windows'],
        'semi': [2, 'always']
      },
      'env': {
        'es6': true,
        'node': true,
        'browser': true
      },
      'extends': 'eslint:recommended'
    }))
    .pipe(eslint.format());
});
gulp.task('default', ['lint']);
