var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function () {
    return gulp.src('./src/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('ciyuer.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});
gulp.task('html',function(){
    return gulp.src('./index.html').pipe(connect.reload());
})
gulp.task('clean', function () {
    return gulp.src('./dist').pipe(clean());
});

gulp.task('build', ['clean', 'less'], function () {});

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.less'], ['less']);
    gulp.watch(['./index.html'], ['html']);
});
gulp.task('serve', ['build', 'watch'], function () {
    connect.server({
        port: 3031,
        root: './',
        livereload: true
    });
});