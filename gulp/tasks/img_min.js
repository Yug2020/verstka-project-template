const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');


const imagemin = require('gulp-imagemin');


gulp.task('imgMin', async function () {  
	return gulp
		.src(path0.src.img)
        //.pipe(imagemin())				
        .pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 75, progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]))				
        .pipe(gulp.dest(path0.build.img))
		.on('error', gutil.log);
});