'use strict';

// Updating all references in manifest to revved files
module.exports = function (gulp, plugins, config) { return function () {
	var manifest = require('../../.tmp/rev-manifest.json');
	var stream = gulp.src('dist/index.html');

	Object.keys(manifest).reduce(function(stream, key){
		return stream.pipe(plugins.replace(key, manifest[key]));
	}, stream).pipe(gulp.dest('dist'));
};};
