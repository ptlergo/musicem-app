const gulp = require('gulp');
const nodemon = require('nodemon');
const sass = require('gulp-sass');

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
      pipe(sass().on('error', sass.logError)).
      pipe(gulp.dest(sOutput));

});
