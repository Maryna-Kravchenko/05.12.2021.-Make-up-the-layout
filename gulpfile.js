const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const server = require('browser-sync').create();

gulp.task("style", () => {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./build/css'))
        .pipe(server.stream())
})

gulp.task("html", () => {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('build'))
        .pipe(server.stream())
})

gulp.task("js", () => {
    return gulp.src('./src/**/*.js')
        .pipe(gulp.dest('build'))
        .pipe(server.stream())
})

gulp.task("clean", () => {
    return del('build');
})

gulp.task("server", () => {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        ul: false
    })

    gulp.watch('./src/**/*.scss', gulp.task('style'))
    gulp.watch('./src/*.html', gulp.task('html'))
    gulp.watch('./src/**/*.js', gulp.task('js'))
})

gulp.task("copy", function() {
    return gulp.src([
        "./src/assets/fonts/**/*.{woff,woff2}",
        "./src/assets/images/**",
    ],{
        base: "src"
    })
    .pipe(gulp.dest('build'));
});

gulp.task("start", gulp.series('clean', 'copy', 'html', 'js', 'style', 'server'))