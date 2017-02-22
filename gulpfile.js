const log = require('./src/config').debug;
const gulp = require('gulp');
const nodemon = require('nodemon');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const gulpDocs = require('gulp-ngdocs');


const sInput = './client/stylesheets/scss/*.scss';
const sOutput = './client/stylesheets/css';

/* Compile node server with nodemon */
gulp.task('start', () => {

    nodemon({
        ext: 'js',
        script: 'src/server.js',
    });

});

/* Browser sync task */
gulp.task('browser-sync', () => {

    browserSync.init({
      server: {
        baseDir: './client',
      },
      files: ['./client/index.html', './client/views'],
    });

});

/* Compile annotations into docs */
gulp.task('ngdocs', () => {

    return gulp.
      src('./src/*.js').
      pipe(gulpDocs.process()).
      pipe(gulp.dest('./docs'));

});

gulp.task('default', ['browser-sync']);
