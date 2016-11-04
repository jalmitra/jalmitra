var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var css = require('gulp-css');
var uglify = require('gulp-uglify');


gulp.task('serve', ['sass','scripts'], function() {

    browserSync.init({
    	server: {
        		baseDir: "./"
    	}
    });

    gulp.watch("./src/js/app.js",['scripts']).on('change', browserSync.reload);
    gulp.watch("./src/scss/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("./src/js/**/*.js",['scripts']);
    gulp.watch("./src/templates/*.html").on('change', browserSync.reload);
    gulp.watch("./index.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src([
                     "./node_modules/bootstrap/dist/css/bootstrap.css",
                     './node_modules/font-awesome/scss/font-awesome.scss',
                     "./src/scss/*.scss"
                     ])
        .pipe(sass()).on('error', sass.logError)
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest("./src/css/"));
});
gulp.task('scripts', function() {
    return gulp.src([   "./node_modules/jquery/dist/jquery.min.js",
                        "./node_modules/bootstrap/dist/js/bootstrap.js",
                        "./node_modules/angular/angular.js",
                        "./node_modules/angular-route/angular-route.js",
                        "./src/js/app.js",
                        "./src/js/controllers/*.js",
                        "./src/js/services/*.js",
                        "./src/js/directives/*.js",
                        "./src/js/filters/*.js"
                        ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest("./src/js/"))
        .pipe(uglify());
});

gulp.task('default', ['serve']);