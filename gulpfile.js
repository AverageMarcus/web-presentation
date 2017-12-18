var gulp      = require('gulp');
var webserver = require('gulp-webserver');
var concat    = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');

var paths = {
  sourcefiles : [
    './src/web-presentation.html',
    './src/web-slide.html',
    './src/web-slide-title.html',
    './src/web-presentation-keyboardcontrols.html',
    './src/web-presentation-progress.html',
    './src/web-code-sample.html',
    './src/web-presentation-swipecontrols.html']
};

gulp.task('dist', function() {
  gulp.src(paths.sourcefiles)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(concat('web-presentation.html'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function(){
  gulp.watch(paths.sourcefiles, ['dist']);
});

gulp.task('default', ['watch']);
