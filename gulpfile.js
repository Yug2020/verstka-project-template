const gutil = require('gulp-util');
const path0 = require('./gulp/path0');
const gulp  = require('gulp');

const browserSync = require('browser-sync').create();

const requireDir = require('require-dir');
requireDir('./gulp/tasks');
//requireDir('./gulp/tasks/test.js'); можно поштучно

// конфиг веб сервера
const config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "YUG2020"
};
// web-server
/***********************************************/
// BrowserSync
gulp.task('webserver', done=> { 
  browserSync.init({
    server: {
      baseDir: './build'
    },
    notify: false
  });
  
  browserSync.watch('./build/**/*.*').on('change', browserSync.reload);
  
  done()
});	

//***********************//
// CSS
// 	lessToCSS Заменяет Less на CSS
// 	cssGropuMediaQuery групирует медиа запросы
//  cssAutoPrefixer Добавляет префиксы
//	cssBeautify auto TAB
//	cssNoComent delete comment
//  cssMin


// HTML
//	htmlRigger вставляет html файл в другой файл

// IMG
//	imgMin
//	imgToPNG
//	imgResize

// JS
// 	jsCompress
//	jsObfuscator


// Utils
// 	cleanAll
//	cleanCSS
//	cleanImg
//	cleanJS
//	cleanHTML


// Build CSS
gulp.task('css:build',gulp.series(
	'cleanCSS',
	'lessToCSS',
	'cssGropuMediaQuery',
	'cssAutoPrefixer',
	'cssNoComent',
	'cssBeautify',
	'cssMin'
	));


// Build HTML
gulp.task('html:build',gulp.series(
	'cleanHTML',
	'htmlRigger'
	));


gulp.task('build',gulp.parallel(
    'html:build',
    'css:build'
));

//********************************//
// WATCH
gulp.task('watch', function(){
    gulp.watch(path0.watch.html,gulp.series('html:build'));
    gulp.watch(path0.watch.style,gulp.series('css:build'));
   // gulp.watch(path0.watch.all,gulp.series('webserver'));
	//browserSync.watch(path0.watch.all).on('change', browserSync.reload);
	/* gulp 3
    watch([path0.watch.style], function(event, cb) {
        gulp.start('css:build');
    });
	*/
});

// TEST
gulp.task('default',gulp.series('build','webserver','watch'));

// build task