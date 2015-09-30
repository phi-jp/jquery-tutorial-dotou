var gulp = require('gulp');
var webserver = require('gulp-webserver');


gulp.task('watch', function(){
  gulp.watch(target, ['riot']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      // port: 9000,
      // directoryListing: true,
      open: true,
    }));
});

gulp.task('default', ['webserver']);
