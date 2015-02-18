'use strict';

// Run PageSpeed Insights
module.exports = function (gulp, plugins, config) { return function () {
	return require('psi')(config.pageSpeed.site, {
		nokey: config.pageSpeed.nokey,
		// key: config.pageSpeed.key,
		strategy: config.pageSpeed.strategy
	}, function (err, data) {
		console.log('Site: ' + config.pageSpeed.site);
		console.log('Strategy: ' + config.pageSpeed.strategy);
		if (err) {
			console.log(err);
		} else {
			console.log('Score: ' + data.score);
			console.log(data.pageStats);
		}
	});
};};
