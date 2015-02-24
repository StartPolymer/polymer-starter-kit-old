'use strict';

// Vulcanize imports
module.exports = function (gulp, plugins, config) { return function () {
  return gulp.src('dist/elements/elements.vulcanized.html')
    .pipe(plugins.vulcanize({
      dest: 'dist/elements',
      csp: true,    // Extract inline <script> blocks into a separate file.
      inline: true, // Inline all scripts and stylesheets.
      strip: true   // Strip comments and empty text nodes from output.
    }))
    .pipe(gulp.dest('dist/elements'))
    // Revving file
    .pipe(plugins.rev())
    .pipe(gulp.dest('dist/elements'))
    .pipe(plugins.size({title: 'vulcanize'}))
    // Write rev-manifest.json to .tmp
    .pipe(plugins.revAll.manifest())
    .pipe(gulp.dest('.tmp'));
};};
