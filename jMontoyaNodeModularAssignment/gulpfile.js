var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    files = ['**/*.js', '!node_modules//**'];

gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(eslint({
      extends: 'eslint:recommended',
      ecmaFeatures: {
        'modules': true
      },
      "rules": {
          "no-console": 0
      },
      envs: [
          'node',
          'mocha'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('watch', function() {
  gulp.watch(files, ['lint']);
});

gulp.task('default', ['watch', 'lint']);
