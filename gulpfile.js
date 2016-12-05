const gulp = require('gulp');
const nodemon = require('nodemon');

gulp.task('default', () => {

    console.log('gulp tasking');

});

gulp.task('start', () => {

    nodemon({
        script: 'src/server.js',
        ext: 'js'
    });

});
