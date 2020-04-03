const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');

const javascriptObfuscator = require('gulp-javascript-obfuscator');

 
gulp.task('jsObfuscator', async function () {  
	return gulp
		.src(path0.build.js+'main.js')
        .pipe(javascriptObfuscator(
			{
        compact: true
    }
			))				
        .pipe(gulp.dest(path0.build.js))
		.on('error', gutil.log);
});