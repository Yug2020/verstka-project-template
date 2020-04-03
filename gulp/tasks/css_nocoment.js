const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');


const  stripCssComments  =  require('gulp-strip-css-comments');


gulp.task('cssNoComent', function () {  
	return gulp
		.src(path0.build.css+'style.css')
        .pipe(stripCssComments())				
        .pipe(gulp.dest(path0.build.css))
		.on('error', gutil.log);
});