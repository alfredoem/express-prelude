var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');


var bundleStyle = function() {
    return gulp
            .src('resources/assets/css/app.scss')
            .pipe(sass())
            .pipe(cssnano({zindex: false}))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('public/css'));
}

var bundleFont = function() {
    return gulp
            .src('node_modules/materialize-css/fonts/roboto/*.*')
            .pipe(gulp.dest('public/fonts/roboto'))
}


gulp.task('bundle-style', function(){
    return bundleStyle();
})

gulp.task('bundle-font', function(){
    return bundleFont();
})

gulp.task('default', ['bundle-style', 'bundle-font']);