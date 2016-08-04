var gulp = require('gulp');
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');

gulp.task('default', function () {
    return gulp.src('dist/css/main.css')
        .pipe(concat('main.css'))
        .pipe(uncss({
          html: ['dist/index.html']
        }))
        .pipe(nano())
        .pipe(gulp.dest('./out'));
});