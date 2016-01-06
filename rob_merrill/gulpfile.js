var gulp = require('gulp');
var eslint = require('gulp-eslint');
var files = ['**/*.js', '!node_modules/**'];
gulp.task('lint', function(){
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());

});

gulp.task('default', ['lint']);
