var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync');
var cache = require('gulp-cache');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-tinypng');
var cssShorthand = require('gulp-shorthand');
var minifyCss = require("gulp-minify-css");

var sourcemaps = require('gulp-sourcemaps');

gulp.task('minify-css', function() {
  return gulp.src('./dist/css/main.css')
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/min'));
});

gulp.task('cssShort', function(){
     return gulp.src('./dist/css/main.css')
         .pipe(cssShorthand())
         .pipe(gulp.dest('./dist/css/min'));
 });

gulp.task('tinypng', function () {
    gulp.src('dev/img/*.*')
        .pipe(imagemin('r32JegWUnlIuNsW4fU5Xtn8iyfNyEolG'))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('dev/img/icons/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    padding: 5
  }));
  return spriteData.pipe(gulp.dest('dev/img/icons/'));
});

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
