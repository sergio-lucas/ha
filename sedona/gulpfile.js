var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync');
var cache = require('gulp-cache');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    },
  })
})

gulp.task('stylus', function () {
  gulp.src('dev/styl/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


//jade compilation
gulp.task('jade', function() {
  var YOUR_LOCALS = {};
  gulp.src('dev/jade/pages/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('copyimages', function() {
   gulp.src('dev/img/*.*')
   .pipe(gulp.dest('dist/img/'));
});


gulp.task('watch', ['stylus', 'browserSync', 'jade'], function (){
  gulp.watch('dev/styl/*.styl', ['stylus']);
  gulp.watch('dev/jade/pages/**/*.jade', ['jade']);
  gulp.watch('dev/img/*.*', ['copyimages']);
});
