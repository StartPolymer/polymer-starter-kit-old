'use strict';

// Deploy to GitHub Pages
module.exports = function (gulp, plugins, config) { return function () {
	return gulp.src('dist/**/*')
		.pipe(plugins.ghPages({
			branch: config.ghPages.branch,
			origin: config.ghPages.origin
		}));
};};
