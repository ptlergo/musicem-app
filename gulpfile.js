const log = require('./src/config').debug;
const gulp = require('gulp');
const nodemon = require('nodemon');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const gulpDocs = require('gulp-ngdocs');


const sInput = './client/stylesheets/scss/*.scss';
const sOutput = './client/stylesheets/css';

gulp.task('start', () => {

    nodemon({
        ext: 'js',
        script: 'src/server.js',
    });

});

gulp.task('browser-sync', ['sass'], () => {

    browserSync.init({server: './client'});
    gulp.watch(sInput, ['sass']);
    gulp.watch('client/*.html').
      on('change', browserSync.reload, (event) => {

          log('File ' + event.path + ' was ' +
              event.type + ', running tasks...');

      });

});

gulp.task('sass', () => {

    return gulp.
      src(sInput, ['sass']).
      pipe(sourcemaps.init()).
      pipe(sass().on('error', sass.logError)).
      pipe(sourcemaps.write('')).
      pipe(gulp.dest(sOutput)).
      pipe(browserSync.stream());


});

gulp.task('watch', () => {

    return gulp.
      watch(sInput, ['sass']).
      on('change', (event) => {

          log('File ' + event.path + ' was ' +
              event.type + ', running tasks...');

      });

});

gulp.task('ngdocs', () => {

    return gulp.
      src('./src/*.js').
      pipe(gulpDocs.process()).
      pipe(gulp.dest('./docs'));

});

gulp.task('default', ['start', 'browser-sync', 'watch']);
