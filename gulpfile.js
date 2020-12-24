"use strict";
// Load plugins
const gulp = require('gulp');
const connect = require('gulp-connect-php');
const gulpSass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');

// Load paths — remove once SASS is set up if I don't need these as a template
// var sassPaths = [
//   'node_modules/foundation-sites/scss',
//   'node_modules/motion-ui/src'
// ];

// Build Jekyll site (but do not compile CSS)
function jekyll (gulpCallBack){
    var spawn = require('child_process').spawn;
    var jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});
    jekyll.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
    });
}

// SASS
 function sass() {
   return gulp.src('_sass/style.scss')
     .pipe(sourcemaps.init()) 
     .pipe(gulpSass({
       outputStyle: 'compressed' // compressed, expanded
     })
       .on('error', gulpSass.logError))
     .pipe(sourcemaps.write('./'))
     .pipe(gulp.dest('_site/css'))
     .pipe(browserSync.stream());
 }

// Start Browsersync with PHP
function php() {
  connect.server({
    base: './_site'
    },function (){
      browserSync({
        proxy: '127.0.0.1:8000',
        notify: false,
        port: 3333
      });
  }); 
}

// BrowserSync reload
function reload (done) {
  browserSync.reload({
  });
  done();
}

// Watch files
function watch() {
  gulp.watch("_sass/*.scss", sass);
  gulp.watch(
    [
      "**/*.html",
      "!_site/**/*.html",
      "js/*.js",
      "serviceworker.js",
      "**/*.md",
      "_config.yml",
      "_data/*"
    ],
    gulp.series(jekyll, reload)
  );
}

// Export tasks
exports.default = gulp.series(jekyll, sass, gulp.parallel(watch, php));