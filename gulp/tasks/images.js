'use strict';

// Optimize Images Recursively (All Files)
module.exports = function (gulp, plugins, config) { return function () {
  return gulp.src('app/images/**/*')
    .pipe(plugins.cache(plugins.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
    .on('error', function(err){ console.log(err); this.end; }))
    .pipe(gulp.dest('dist/images'))
    .pipe(plugins.size({title: 'images'}));
};};
