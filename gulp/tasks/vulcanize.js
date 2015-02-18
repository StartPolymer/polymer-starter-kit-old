'use strict';

// Vulcanize imports
module.exports = function (gulp, plugins, config) { return function () {
	return gulp.src('dist/elements/elements.vulcanized.html')
		.pipe(plugins.vulcanize({
			dest: 'dist/elements',
			strip: true
		}))
		// Revving file
		.pipe(plugins.rev())
		.pipe(gulp.dest('dist/elements'))
		.pipe(plugins.size({title: 'vulcanize'}))
		// Write rev-manifest.json to .tmp
		.pipe(plugins.revAll.manifest())
		.pipe(gulp.dest('.tmp'));
};};
