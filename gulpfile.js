const log = require('./src/config').debug;
const gulp = require('gulp');
const nodemon = require('nodemon');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const gulpDocs = require('gulp-ngdocs');

const sassSource = './client/stylesheets/scss/*.scss';
const sassDest = './client/stylesheets/css';

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
      baseDir: './src',
    },
    files: ['./client', './src'],
  });
});

/* Compile annotations into docs */
gulp.task('ngdocs', () => {
  return gulp
    .src('./src/*.js')
    .pipe(gulpDocs.process())
    .pipe(gulp.dest('./docs'));
});

/* Sass compile once then reload browser */
gulp.task('sass', () => {
  return gulp.src(sassSource)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(sassDest))
        .pipe(browserSync.reload({
          stream: true,
        }));
});

/* Default task that watches Sass, html, and reloads browsersync for changes */
gulp.task('default', ['start', 'browser-sync'], () => {
  gulp.watch(sassSource, ['sass']);
  gulp.watch('./client/*.html').on('change', browserSync.reload);
});
