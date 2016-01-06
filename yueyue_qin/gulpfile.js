var gulp = require('gulp');
var eslint = require('gulp-eslint');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var stylish = require('jshint-stylish');


var files = ['gulpfile.js', './lib/greet.js', 'hello.js','./lib/greet2.js','./lib/greet3.js','./test/greetTest.js'];

gulp.task('lint',function(){
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('jshint',function(){
  return gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('test', function() {
  return gulp.src('./test/greetTest.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha());
});

gulp.task('default',['lint','jshint','test']);
