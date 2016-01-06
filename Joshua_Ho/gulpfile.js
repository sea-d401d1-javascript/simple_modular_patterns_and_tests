var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var gulp = require('gulp');

//IS NOT WORKING BUT NECESSARY
var eslint = require('gulp-eslint');

var files = ['']
//INSTALL STYLISH

//JS HINT TASK
gulp.task('jshint' , function() {
	return gulp.src('./lib/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter());
	//Code for default tasks here, dawg

});

//MOCHA TASK
gulp.task('mocha' , function() {
	return gulp.src(['./test/*.js'])
	.pipe(mocha({ reporter: 'spec'}));
});

//Watch task?
gulp.task('watch' , function() {
	return gulp.watch(['jshint' , 'mocha' ,'/../*.js']);
});

//Run All
gulp.task('default' , ['watch' , 'mocha' , 'jshint']);



//Code found at 
//https://tanzimsaqib.wordpress.com/2015/06/06/continuous-functional-test-automation-with-gulp-mocha-request-cheerio-chai/