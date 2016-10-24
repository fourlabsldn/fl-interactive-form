/* eslint-env node */

const src = './src';
const dest = './dist';
const path = require('path');
const organiser = require('gulp-organiser');

organiser.registerAll('./gulp-tasks', {
  sass: {
    watch: path.join(src, 'sass/**/*.js'),
    src: path.join(src, 'sass/main.scss'),
    dest,
  },
  'transpile-react': {
    watch: path.join(src, 'js', '/**/*.js'),
    src: path.join(src, 'js/react-main.js'),
    dest,
    config: {
      external: ['react', 'react-dom'],
    },
  },
  'transpile-es3': {
    src: path.join(src, 'js/es3-main.js'),
    dest,
  },
  'browser-sync': {
    src: '.', // it doesn't matter, it's just so the task object is not ignored.
    reloadOn: ['transpile-react', 'transpile-es3'], // reload page when these tasks happen
    startPath: 'examples/all_field_types/index.html',
    baseDir: './',
  },
});
