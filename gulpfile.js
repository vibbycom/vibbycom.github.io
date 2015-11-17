var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');

//Stylus compile, autoprefix & rename
gulp.task('stylus', function () {
  return gulp.src('./_stylus/_main.styl')
    .pipe(stylus({
      compress: true
    }))
    .on('error', errorHandler('stylus error'))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(rename(function (path) {
        path.basename = "main";
      }))
    .pipe(gulp.dest('./assets/css'));
});


//Watching on stylus files
gulp.task('watch', function(){
  gulp.watch('./_stylus/**/*.styl', ['stylus']);
})

//Default task
gulp.task('default', function (callback) {
  runSequence(['stylus', 'watch'],
    callback
  )
})

var errorHandler = function (title) {
  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
