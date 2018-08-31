var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    sequence = require('gulp-sequence'),
    connect = require('gulp-connect-php'),
    sass = require('gulp-sass');

var $    = require('gulp-load-plugins')();

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

gulp.task('jekyll', function (gulpCallBack){  //builds jekyll site (but does not compile css)
    var spawn = require('child_process').spawn;
    var jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});

    jekyll.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
    });
});

gulp.task('sass', function() {
  return gulp.src('_sass/*.scss')
    .pipe(sourcemaps.init()) 
    .pipe(sass({
      includePaths: sassPaths
    })
      .on('error', sass.logError))
    .pipe(sourcemaps.write()) 
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.stream());
});

gulp.task('jquery', function(){
  return gulp.src('node_modules/jquery/dist/jquery.js')
    .pipe(gulp.dest('_site/js'))
});

gulp.task('what-input', function(){
  return gulp.src('node_modules/what-input/dist/what-input.js')
    .pipe(gulp.dest('_site/js'))
});

gulp.task('foundation-sites', function(){
  return gulp.src('node_modules/foundation-sites/dist/js/foundation.js')
    .pipe(gulp.dest('_site/js'))
});

gulp.task('connect-sync', function() {
  connect.server({
    base: './_site'
    },function (){
      browserSync({
        proxy: '127.0.0.1:8000',
        notify: false
      });
  }); 
});

gulp.task('reload', ['jekyll'], function() {
    browserSync.reload({
    });
});

gulp.task('default', function(done) {
    sequence('sass', 'jekyll', 'jquery', 'what-input', 'foundation-sites', 'connect-sync', done);
    gulp.watch(['**/*.html', '!_site/**/*.html', 'js/*.js', '*.md', '_posts/*.md', '_config.yml', 'img/*'], ['reload']);
    gulp.watch(['_sass/*.scss'], ['sass']);
});