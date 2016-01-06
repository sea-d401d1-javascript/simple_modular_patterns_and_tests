var gulp = require('gulp'); // eslint-disable-line
var eslint = require('gulp-eslint'); // eslint-disable-line
var mocha = require('gulp-mocha'); // eslint-disable-line

var files = ['gulpfile.js', 'greet.js', 'hello_world.js', './test/greet-test.js', '!*json', '!node_modules/**'];
gulp.task('lint', function() {
 return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha', function() {
 return gulp.src('./test/greet-test.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function() {
 return gulp.watch(files, ['lint', 'mocha']);
});

gulp.task('default', ['watch', 'lint', 'mocha']);

gulp.task('lint', function() {
  return gulp.src(files).pipe(eslint({
    "rules": {
      "semi": 1,
      "strict": 0,
      "indent": [2, 2],
      "quotes": [1, "single"],
      "no-multi-spaces": [1, {
        "exceptions": {
          "VariableDeclarator": true,
          "FunctionExpression": true
        },
      "env": {
        "browser": true,
        "jquery": true,
        "node": true,
        "mocha": true
      }
      }]
    }

  }))
        .pipe(eslint())
        .pipe(eslint.format());
});
