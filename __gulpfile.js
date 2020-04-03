var gutil = require('gulp-util');


var path = require('path');
var gulp = require('gulp');


var less = require('gulp-less');  

var gcmq = require('gulp-group-css-media-queries');

var csso = require('gulp-csso');/* объединение классов */

var shorthand = require('gulp-shorthand');

var cssnano = require('gulp-cssnano');

var cssbeautify = require('gulp-cssbeautify');


var combineMq = require('gulp-combine-mq');


gulp.task('less', function () {  
  //  return gulp.src('src/less/**/*.less')
    return gulp.src('src/less/**/style.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
				
.pipe(combineMq())
		//.pipe(gcmq())
		//.pipe(shorthand())
		.pipe(csso())
		//.pipe(nano())
		.pipe(cssbeautify())
		
        .pipe(gulp.dest('build/css'))
        .on('error', gutil.log);
});



 
gulp.task('cssgroup', function () {
    gulp.src('build/css/style.css')
        .pipe(gcmq())
		.pipe(csso())
        .pipe(gulp.dest('build/css/'))
		.on('error', gutil.log);
});


gulp.task('test', function() {

console.log('Я работаю');

});

//---------------------------------
var gulp = require('./gulp')([
    'browserify',
    'compass',
    'images',
    'open',
    'watch',
    'serve'
]);

gulp.task('build', ['browserify', 'compass', 'images']);
gulp.task('default', ['build', 'watch', 'serve', 'open']);
