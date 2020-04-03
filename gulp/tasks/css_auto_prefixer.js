const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');


const autoprefixer = require('gulp-autoprefixer');


gulp.task('cssAutoPrefixer', function () {  
 //let autoprefixBrowsers=  ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];
	return gulp
		.src(path0.build.css+'style.css')
        //.pipe(autoprefixer())		
        //.pipe(autoprefixer({ browsers: autoprefixBrowsers }))		
.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))		
        .pipe(gulp.dest(path0.build.css))
		.on('error', gutil.log);
});
