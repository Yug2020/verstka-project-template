const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');

const plumber = require('gulp-plumber'); // модуль для отслеживания ошибок
const rigger = require('gulp-rigger');


gulp.task('htmlRigger', function () {  
	return gulp
		.src(path0.src.html)
        .pipe(plumber())				
        .pipe(rigger())				
        .pipe(gulp.dest(path0.build.html))
		.on('error', gutil.log);
});