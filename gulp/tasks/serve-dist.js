'use strict';

// Build and serve the output from the dist build
module.exports = function (gulp, config, browserSync) { return function () {
	browserSync({
		browser: config.browserSync.browser,
		https: config.browserSync.https,
		notify: config.browserSync.notify,
		port: config.browserSync.port,
		server: 'dist'
	});
};};
