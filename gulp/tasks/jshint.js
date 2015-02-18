'use strict';

// Lint JavaScript
module.exports = function (gulp, plugins, browserSync) { return function () {
	return gulp.src([
			'app/scripts/**/*.js',
			'app/elements/**/*.js',
			'app/elements/**/*.html'
		])
		.pipe(browserSync.reload({stream: true, once: true}))
		.pipe(plugins.jshint.extract()) // Extract JS from .html files
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish'))
		.pipe(plugins.if(!browserSync.active, plugins.jshint.reporter('fail')));
};};
