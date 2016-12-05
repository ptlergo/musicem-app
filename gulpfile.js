const gulp = require('gulp');
const nodemon = require('nodemon');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const sInput = './client/stylesheets/scss/*.scss';
const sOutput = './client/stylesheets/css';

// gulp.task('default', () => {
// });

gulp.task('start', () => {

    nodemon({
        ext: 'js',
        script: 'src/server.js',
    });

});

gulp.task('sass', () => {

    return gulp.
      src(sInput, ['sass']).
      pipe(sourcemaps.init()).
      pipe(sass().on('error', sass.logError)).
      pipe(sourcemaps.write('')).
      pipe(gulp.dest(sOutput));

});
