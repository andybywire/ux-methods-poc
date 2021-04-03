"use strict";
// Load plugins
const gulp = require('gulp');
const { spawn } = require('child_process');
const { exec } = require('child_process');
const shell = require('gulp-shell');
const connect = require('gulp-connect-php');
const gulpSass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');

// Build Jekyll site (but do not compile CSS)
function jekyll (gulpCallBack){
    const jekyll = spawn('jekyll', ['build', '--trace'], {stdio: 'inherit'});
    jekyll.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
    });
}

// Extract Methods RDF from .gsheet with Methods.sparql
function ext_methods (gulpCallBack){
    const methods = exec('tarql ~/repos/uxmd/_data/etl/Methods.sparql > ~/repos/uxmd/_data/etl/Methods.ttl', {stdio: 'inherit'});
    methods.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Methods Tarql process exited with code: '+code);
    });
}

// Extract WebResources RDF from .gsheet with WebResources.sparql
function ext_resources (gulpCallBack){
    const resources = exec('tarql ~/repos/uxmd/_data/etl/WebResources.sparql > ~/repos/uxmd/_data/etl/WebResources.ttl', {stdio: 'inherit'});
    resources.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Resources Tarql process exited with code: '+code);
    });
}

// Load UXM Ontology to Fuseki (replace everything in dataset)
function load_ontology (gulpCallBack){
    const ontology = exec('s-put http://localhost:3030/UXM https://www.uxmethods.org/g1 ~/repos/uxmd/_data/etl/UXMethodsKG.owl', {stdio: 'inherit'});
    ontology.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Methods SOH process exited with code: '+code);
    });
}

// Load Methods data to Fuseki
function load_methods (gulpCallBack){
    const methods = exec('s-post http://localhost:3030/UXM default ~/repos/uxmd/_data/etl/Methods.ttl', {stdio: 'inherit'});
    methods.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Methods SOH process exited with code: '+code);
    });
}

// Load WebResources data to Fuseki
function load_resources (gulpCallBack){
    const resources = exec('s-post http://localhost:3030/UXM default ~/repos/uxmd/_data/etl/WebResources.ttl', {stdio: 'inherit'});
    resources.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Resources SOH process exited with code: '+code);
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
     .pipe(autoprefixer())
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

// Watch Jekyll files
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
      "!_data/**"
    ],
    gulp.series(jekyll, reload)
  );
}

// Watch ontology
function watch_data() {
  gulp.watch(
    "_data/etl/UXMethodsKG.owl",
    gulp.series(load_ontology, load_methods, load_resources, jekyll, reload)
  );
}

// Export tasks
// `gulp` builds UI from MD & SPARQL endpoint data and watches for changes to .md and template files. Fuseki must be running.
// USE FOR: any work on app.
exports.default = gulp.series(jekyll, sass, gulp.parallel(watch, php));

// `gulp etl` runs Tarql extraction, loads ontology & data into Fuseki, and watches for changes to the ontology. Fuseki must be running.
// USE FOR: updating data, iterating ontology.
exports.etl = gulp.series(ext_methods, ext_resources, load_ontology, load_methods, load_resources, watch_data);

// `gulp update` runs Tarql extraction and loads ontology & data into Fuseki.
// USE FOR: updating data from Google Sheets sources only
exports.update = gulp.series(ext_methods, ext_resources, load_ontology, load_methods, load_resources, jekyll, reload);
