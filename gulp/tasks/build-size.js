'use strict';

// Get gzipped size of build
module.exports = function (gulp, plugins, config) { return function () {
	return gulp.src([
		'dist/**/*',
		'!dist/**/*.{txt,html,xml,json,css,js}'
		]).pipe(plugins.size({title: 'build (gzipped)'}));
};};
