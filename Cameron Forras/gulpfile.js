var gulp = require('gulp');
var eslint = require('gulp-eslint');

var files = ['**/*.js', '!node_modules/**'];
gulp.task('lint', function() {
    return gulp.src(files)
    .pipe(eslint({
        extends:'eslint:recommended',
        ecmaFeatures: {
            'modules': true
        },
        'rules': {
            'no-console': 0
        },
        envs: [
            'node',
            'mocha'
        ]    
    })) 
    .pipe(eslint.format());
});

gulp.task('default', ['lint']);