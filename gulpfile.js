const log = require('./src/config').debug;
const gulp = require('gulp');
const nodemon = require('nodemon');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const sInput = './client/stylesheets/scss/*.scss';
const sOutput = './client/stylesheets/css';

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

gulp.task('watch', () => {

    return gulp.
      watch(sInput, ['sass']).
      on('change', (event) => {

          log('File ' + event.path + ' was ' +
              event.type + ', running tasks...');

      });

});

gulp.task('default', ['start', 'start', 'watch']);
