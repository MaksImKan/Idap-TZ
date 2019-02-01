'use strict';

const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        browserSync = require('browser-sync').create(),
        autoprefixer = require('gulp-autoprefixer');

        
gulp.task('sass', function() {
    return gulp.src('./src/scss/styles.scss') // Gets all files ending with .scss in src/scss
          .pipe(sass())
          .pipe(gulp.dest('./src/css'))
          .pipe(gulp.dest('./dist/css'))
          .pipe (browserSync.stream())
          .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
});        

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
});
    gulp.watch('./src/scss/styles.scss', gulp.series('sass'))
    gulp.watch('./src/css/styles.css').on('change', browserSync.reload);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/*.js').on('change', browserSync.reload);
  })

// gulp.task('serve', function() {
//     browserSync.init({
//         server: './src',
//         open: false,
//         index: 'index.html'
//     });

//     gulp.watch('./src/*.html').on('change', browserSync.reload);
//     gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
//     gulp.watch('./src/img/**/*').on('change', browserSync.reload);
// });

