// include gulp
var gulp = require('gulp'); 
// include mocha
var mocha = require('gulp-mocha');
// include plug-ins
var jshint = require('gulp-jshint');
//set of files to run throught the tasks
var files = ['get_argv.js', 'greetModule.js', 'hello.js', './test/greet_homework_test.js', 'gulpfile.js', 'package.json'];
//make a copy without package.json
var filesNOJSON = files.slice();
filesNOJSON.pop();

// JS hint task WITH EXTRA CREDIT POINT 2
gulp.task('lint', function() {
  gulp.src(files)
    .pipe(jshint({
      node: true,
      globals: {
        describe: true,
        it: true,
        before: true,
        after: true
      }
    }))
    .pipe(jshint.reporter('default'));
});
//mocha tests
gulp.task('test', function () {
    gulp.src('./test/greet_homework_test.js')
        .pipe(mocha({
          reporter: 'nyan'
        }));
});

// Watch Files For Changes EXTRA CREDIT POINT 1
gulp.task('watch', function() {
    gulp.watch(filesNOJSON, ['lint', 'test']);
});

// Default Task
gulp.task('default', ['watch', 'lint', 'test']);



//run the mocha/chai test as well as run jshint on all of your code

//class gulpfile.js
// var gulp = require('gulp');
// var eslint = require('gulp-eslint');

// var files = ['gulpfile.js', './lib/greet.js', 'hello.js', './test/hello_test.js'];
// gulp.task('lint', function() {
//   return gulp.src(files)
//     .pipe(eslint()) 
//     .pipe(eslint.format());
// });

// gulp.task('default', ['lint']);