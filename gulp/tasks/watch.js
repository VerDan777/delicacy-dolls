const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    
 

    // html 
    watch('./dist/*.html', function() {
        browserSync.reload();
    })

    // styles
    watch('./src/sass/**/*.scss', function() {
        gulp.start('cssInject');
    })


});

gulp.task('cssInject', ['styles'], function() {
    gulp.src('./dist/styles.css')
        .pipe(browserSync.stream());
});
