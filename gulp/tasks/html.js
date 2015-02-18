'use strict';

// Scan Your HTML For Assets & Optimize Them
module.exports = function (gulp, plugins, config) { return function () {
	var assets = plugins.useref.assets({searchPath: ['.tmp', 'app', 'dist']});

	return gulp.src(['app/**/*.html', '.tmp/*.html', '!app/{elements,test}/**/*.html'])
		// Replace path for vulcanized assets
		.pipe(plugins.if('*.html', plugins.replace(
			'elements/elements.html', 'elements/elements.vulcanized.html')))
		.pipe(assets)
		// Concatenate And Minify JavaScript
		.pipe(plugins.if('*.js', plugins.uglify({preserveComments: 'some'})))
		// Concatenate And Minify Styles
		// In case you are still using useref build blocks
		.pipe(plugins.if('*.css', plugins.cssmin()))
		// Revving files with child references into consideration
		// when calculating a hashes
		.pipe(plugins.revAll())
		.pipe(assets.restore())
		.pipe(plugins.useref())
		// Updating all references to revved files
		.pipe(plugins.revReplace())
		// Minify Any HTML
		.pipe(plugins.if('*.html', plugins.minifyHtml({
			empty: true,	// KEEP empty attributes
			loose: true,	// KEEP one whitespace
			quotes: true,	// KEEP arbitrary quotes
			spare: true		// KEEP redundant attributes
		})))
		// Output Files
		.pipe(gulp.dest('dist'))
		.pipe(plugins.size({title: 'html'}));
};};
