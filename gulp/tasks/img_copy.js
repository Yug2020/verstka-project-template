const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');

const flatten = require('gulp-flatten');

gulp.task('imgCopy', function () {  
	return gulp
		.src(path0.src.img)
        .pipe(flatten())				
        .pipe(gulp.dest(path0.build.img))
		.on('error', gutil.log);
});