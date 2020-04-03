const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');


var rename = require('gulp-rename');
var imagesConvert = require('gulp-images-convert');


gulp.task('imgToPNG', async function () {  
	return gulp
		.src(path0.src.img)
        .pipe(imagesConvert({targetType: 'png'}))
		.pipe(rename({extname: ".png"}))
        .pipe(gulp.dest(path0.build.img))
		.on('error', gutil.log);
});