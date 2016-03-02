var gulp = require('gulp');
var eslint = require('gulp-eslint');
var files = ['**/*.js', '!node_modules/**'];

gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(eslint({
      "settings": {
        "ecmascript": 5
      },
      "ecmaFeatures": {
      },
      "env": {
        "browser": true,
        "jquery": true
      },
      "rules": {
        "no-console": 0,
        "semi": 1,
        "strict": 0,
        "indent": [2, 2],
        "quotes": [1, "single"],
        "no-multi-spaces": [1, {
          "exceptions": {
            "VariableDeclarator": true,
            "FunctionExpression": true
          }
        }],
        "key-spacing": [0, {"align": "value"}],
        "no-underscore-dangle": 0
      }
    }))
    .pipe(eslint.format());
});

gulp.task('default', ['lint']);
