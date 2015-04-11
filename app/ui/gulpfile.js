var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('lint', function(){
  return gulp.src('raw/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function(){
  return gulp.src('raw/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('base/css'));
});

gulp.task('scripts', function(){
  return gulp.src('raw/*.js')
    .pipe(concat('ui.js'))
    .pipe(gulp.dest('base/js'))
    .pipe(rename('ui.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('base/js'));
});

gulp.task('watch', function(){
  gulp.watch('raw/*.js', ['lint', 'scripts']);
  gulp.watch('raw/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
