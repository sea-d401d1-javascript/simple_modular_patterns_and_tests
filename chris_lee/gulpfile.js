var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var cache = require('gulp-cached');

var files = ['gulpfile.js', './lib/greet.js', './test/greet_test.js'];
gulp.task('lint', function() {
    return gulp.src(files)
    .pipe(cache('linting'))
    .pipe(eslint(
        {
            'rules': {
                'indent': [
                    2,
                    4
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
                'jsx': true
            }
        }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('mocha', function () {
    return gulp.src('./test/greet_test.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function(){
    gulp.watch('./*.js', ['lint']);
});

gulp.task('default', ['watch','lint', 'mocha']);
