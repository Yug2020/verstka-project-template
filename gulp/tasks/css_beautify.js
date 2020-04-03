const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');


const cssbeautify = require('gulp-cssbeautify');


gulp.task('cssBeautify', function () {  
	return gulp
		.src(path0.build.css+'style.css')
        .pipe(cssbeautify())				
        .pipe(gulp.dest(path0.build.css))
		.on('error', gutil.log);
});