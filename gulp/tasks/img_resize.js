const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');


var rename = require('gulp-rename');
var imageResize = require('gulp-image-resize');


gulp.task('imgResize', async function () {  
	return gulp
		.src(path0.src.imgresize)
        .pipe(imageResize({
		  width : 100,
		  height : 100,
		  crop : true,
		  upscale : false
		}))

        .pipe(gulp.dest(path0.build.img))
		.on('error', gutil.log);
});