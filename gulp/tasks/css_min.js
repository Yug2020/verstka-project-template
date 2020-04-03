const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');


const cssclean = require('gulp-clean-css');
const rename = require('gulp-rename');


gulp.task('cssMin', function () {  
	return gulp
		.src(path0.build.css+'style.css')
        .pipe(cssclean())				
        .pipe(rename('style.min.css'))				
        .pipe(gulp.dest(path0.build.css))
		.on('error', gutil.log);
});