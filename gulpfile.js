var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var babel = require('babelify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');


var thirdParty = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/materialize-css/dist/js/materialize.min.js'
];


var bundleScript = function(watch) {
   
    var bundle = browserify('app/index.js', {debug: true});
    
    if (watch) {
        bundle = watchify(bundle);
        bundle.on('update', function(){
            console.log(new Date() + ' --> Bundling');
            rebundle();
        })
    }
   
    function rebundle() {
        bundle
            .transform(babel)
            .bundle()
            .on('error', function(err) {console.log(err); this.emit('end')})
            .pipe(source('index.js'))
            //.pipe(buffer())
            //.pipe(uglify())
            .pipe(rename('app.min.js'))
            .pipe(gulp.dest('public/js'))
    }
    
    rebundle();
}

var bundleScriptTp = function() {// Third Party
    return gulp
            .src(thirdParty)
            .pipe(concat('third-party.min.js'))
            .pipe(gulp.dest('public/js/'));
} 


var bundleStyleMaterial = function() {
    return gulp
            .src('resources/assets/css/app.scss')
            .pipe(sass())
            .pipe(cssnano({zindex: false}))
            .pipe(rename('third-party.min.css'))
            .pipe(gulp.dest('public/css'));
}

var bundleFontMaterial = function() {
    return gulp
            .src('node_modules/materialize-css/fonts/roboto/*.*')
            .pipe(gulp.dest('public/fonts/roboto'))
}

var bundleInconMaterial = function() {
    return gulp.src([
                'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot',
                'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2',
                'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff',
                'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf'
         ])
        .pipe(gulp.dest('./public/fonts/material-design-icons/iconfont'));
}


var bundleImagesSlotGames = function() {
    
    return gulp.src('./resources/assets/images/slot-games/*.jpg')
            .pipe(imagemin())
            .pipe(gulp.dest('./public/images/slot-games-optimized'));
    
} 



gulp.task('bundle-script', function(){
    return bundleScript();
})

gulp.task('bundle-material', function(){
    bundleInconMaterial();
    bundleStyleMaterial();
    bundleFontMaterial();
})

gulp.task('bundle-script-tp', function(){
    bundleScriptTp();
})

gulp.task('bundle-images-slot-games', function(){
   bundleImagesSlotGames(); 
});

gulp.task('default', ['bundle-script', 'bundle-material', 'bundle-script-tp',
                        'bundle-images-slot-games']);


gulp.task('watch', function(){ return bundleScript(true)});