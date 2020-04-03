var gutil = require('gulp-util');
var path0 = require('../path0');
var path = require('path');
var gulp = require('gulp');

var less = require('gulp-less');  

gulp.task('lessToCSS', function () {  
console.log(path0.src.less);
  // return gulp.src('src/less/**/*.less')
   return gulp
		.src(path0.src.style)
        .pipe(less({
				paths: [ path.join(__dirname, 'less', 'includes') ]
  		}))		
		.pipe(gulp.dest(path0.build.css))
		.on('error', gutil.log);
 
});


