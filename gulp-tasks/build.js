/* eslint-disable global-require */
const gulp = require('gulp');
const organiser = require('gulp-organiser');
const tasks = [
  require('./sass'),
  require('./transpile-react'),
  require('./transpile-to-es3'),
].map(t => t.name);

module.exports = organiser.register((task) => {
  gulp.task(task.name, tasks);
});
