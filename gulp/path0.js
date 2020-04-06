const path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/index.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/style/style.less',
        img: 'src/**/*.{jpg,jpeg,png,svg,ico}', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        imgresize: 'src/img/resize/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
         html: 'src/**/*.html',
		   js: 'src/js/**/*.js',
        style: 'src/style/**/*.less',
          img: 'src/**/*.{jpg,jpeg,png,svg,ico}',
        fonts: 'src/fonts/**/*.*'
    },
    clean: {
		all:'./build/*',
		 js:'./build/js',
		css:'./build/css',
		img:'./build/img',
		html:'./build/*.html',
		 all:'.build/**/*.*'
		
	}
};

module.exports = path;

