'use strict';

// Gzip text files
module.exports = function (gulp, plugins, config) { return function () {
	gulp.src('dist/**/*.{txt,html,xml,json,css,js}')
		.pipe(plugins.pako.gzip())
		.pipe(gulp.dest('dist'));
};};
