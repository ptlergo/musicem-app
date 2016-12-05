const gulp = require('gulp');
const nodemon = require('nodemon');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const sInput = './client/stylesheets/scss/*.scss';
const sOutput = './client/css';

gulp.task('default', () => {

    console.log('gulp tasking');

});

gulp.task('start', () => {

    nodemon({
        script: 'src/server.js',
        ext: 'js'
    });

});

gulp.task('sass', () => {

    return gulp.
      src(sInput, ['sass']).
      pipe(sourcemaps.init()).
      pipe(sass().on('error', sass.logError)).
      pipe(sourcemaps.write()).
      pipe(gulp.dest(sOutput));

});
