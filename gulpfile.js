const gulp = require('gulp');
const nodemon = require('nodemon');
const sass = require('gulp-sass');

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

});
