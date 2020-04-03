const gutil = require('gulp-util');
const path0 = require('../path0');
const path = require('path');
const gulp = require('gulp');

//const notify = require( 'gulp-notify' );
const clean = require('gulp-clean');


gulp.task('cleanAll',  function () {  
	return gulp
		.src(path0.clean.all, {read: false, allowEmpty: true})
        .pipe(clean())				
        //.pipe(gulp.dest(path0.build.css))
		.on('error', gutil.log);
});


gulp.task('cleanCSS',  function () {  
	return gulp
		.src(path0.clean.css, {read: false, allowEmpty: true})
		.pipe(clean())
        //.pipe(gulp.dest(path0.build.css))
		.on('error', gutil.log);
});



gulp.task('cleanImg',  function () {  
	return gulp
		.src(path0.clean.img, {read: false, allowEmpty: true})
        .pipe(clean())				
        //.pipe(gulp.dest(path0.build.css))
		.on('error', gutil.log);
});

gulp.task('cleanJS',  function () {  
	return gulp
		.src(path0.clean.js, {read: false, allowEmpty: true})
        .pipe(clean())				
        //.pipe(gulp.dest(path0.build.css))
		.on('error', gutil.log);
});

gulp.task('cleanHTML',  function () {  
	return gulp
		.src(path0.clean.html, {read: false, allowEmpty: true})
        .pipe(clean())				
        //.pipe(gulp.dest(path0.build.css))
		.on('error', gutil.log);
});
