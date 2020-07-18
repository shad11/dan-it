const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const uncss = require('postcss-uncss');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

const clear = () => {
    return gulp.src('./dist')
        .pipe(clean());
};

const buildCSS = () => {
    const plugins = [
        uncss({
            html: ['./src/index.html']
        }),
    ];

    const autoprefixerOptions = {
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    };

    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
};

const buildJS = () => {
    return gulp.src('./src/js/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(terser())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
};

const copyImg = () => {
    return gulp.src('./src/img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
};

const copyIndex = () => {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
};

const watch = () => {
    gulp.watch('./src/scss/**/*.scss', buildCSS)
        .on('change', browserSync.reload);

    gulp.watch('./src/js/*.js', buildJS)
        .on('change', browserSync.reload);

    gulp.watch('./src/index.html', copyIndex)
        .on('change', browserSync.reload);
};

const browserInit = (done) => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        port: 3000,
        notify: false
    });

    //browserSync.watch(['./dist/styles.min.css', './dist/scripts.min.js']);

    done();
};

gulp.task('buildFiles', gulp.parallel(buildCSS, buildJS, copyImg, copyIndex));
gulp.task('clear', clear);

gulp.task('build', gulp.series(clear, 'buildFiles'));
gulp.task('dev', gulp.series(browserInit, watch));