const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

const scripts = ['*.js', 'lib/*.js', 'test/*.js']

gulp.task('lint', () => {
  return gulp.src(scripts)
    .pipe(eslint({
      extends: 'eslint:recommended',
      envs: ['node', 'mocha', 'es6'],
      rules: {
        'no-console': 0
      }
    }))
    .pipe(eslint.format());
})

gulp.task('test', () => {
  return gulp.src('test/*.js')
    .pipe(mocha());
})

gulp.task('watch', () => {
  gulp.watch('scripts', ['lint', 'test'])
});

gulp.task('default', ['watch', 'lint', 'test']);
