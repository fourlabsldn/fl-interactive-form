const gulp = require('gulp');
const es3ify = require('gulp-es3ify');
const sourcemaps = require('gulp-sourcemaps');
const organiser = require('gulp-organiser');

module.exports = organiser.register((task) => {
  // Copy es3 form builder.
  gulp.task(task.name, () => {
    gulp.src(task.src)
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(es3ify())
      .pipe(gulp.dest(task.dest));
  });
});
