'use strict';

// Optimize Images
module.exports = function (gulp, plugins, config) { return function () {
	return gulp.src('app/images/**/*')
		.pipe(plugins.cache(plugins.imagemin({
			progressive: true,
			interlaced: true,
			// don't remove IDs from SVGs, they are often used
			// as hooks for embedding and styling
			svgoPlugins: [{cleanupIDs: false}]
		})))
		.pipe(gulp.dest('dist/images'))
		.pipe(plugins.size({title: 'images'}));
};};
