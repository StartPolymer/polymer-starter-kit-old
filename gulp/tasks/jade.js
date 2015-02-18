'use strict';

// Jade
module.exports = function (gulp, plugins, config) { return function () {
	// Synchronous highlighting with highlight.js
	require('marked').setOptions({
		highlight: function (code) {
			return require('highlight.js').highlightAuto(code).value;
		}
	});

	return require('merge-stream')(
		gulp.src('app/*.jade')
			.pipe(plugins.jade({pretty: true}))
			.pipe(gulp.dest('.tmp')),
			
		gulp.src('app/elements/**/*.jade')
			.pipe(plugins.jade({pretty: true}))
			.pipe(gulp.dest('.tmp/elements'))
	);
};};
