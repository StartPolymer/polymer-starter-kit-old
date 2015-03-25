'use strict';

// Compile and Automatically Prefix Stylesheets
module.exports = function (gulp, plugins, config, stylesDir) { return function () {
  var sourcePath = 'app/styles/*.scss';
  var changeDir = stylesDir;

  if (stylesDir === 'elements' || stylesDir === '') {
    sourcePath = 'app/elements/**/*.scss';
  }

  if (stylesDir === '') {
    changeDir = 'elements';
  }

  return gulp.src(sourcePath)
    .pipe(plugins.changed(changeDir, {extension: '.scss'}))
    .pipe(plugins.rubySass({
        style: 'expanded',
        precision: 10,
        loadPath: ['.']
      })
      .on('error', console.error.bind(console))
    )
    .pipe(plugins.autoprefixer(config.autoprefixer.browsers))
    .pipe(gulp.dest('.tmp/' + stylesDir))
    // Concatenate And Minify Styles
    .pipe(plugins.if('*.css', plugins.cssmin()))
    .pipe(gulp.dest('dist/' + stylesDir))
    .pipe(plugins.size({title: stylesDir}));
};};
