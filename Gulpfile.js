/* eslint-env node */

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

// Rollup
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const rename = require('gulp-rename');
const DepLinker = require('dep-linker');
const replace = require('rollup-plugin-replace');

const es3ify = require('gulp-es3ify');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

const moduleName = 'fl-interactive-form';
const paths = {
  js: {
    src: './src/js/**/*',
    main: './src/js/main.js',
    es3: './src/js/es3-form.js',
    dest: './dist/',
  },
  sass: {
    src: './src/sass/**/*',
    main: './src/sass/main.scss',
    dest: './dist/',
  },
  demo: {
    src: './demo',
    dep: './demo/dependencies',
  },
};

gulp.task('copy-dependencies', () => {
  return DepLinker.copyDependenciesTo(paths.demo.dep);
});

gulp.task('build:src:es3-form', () => {
  // Copy es3 form builder.
  gulp.src(paths.js.es3)
  .pipe(gulp.dest(paths.js.dest));
});

gulp.task('build:src:react-form', () => {
  return rollup({
    entry: paths.js.main,
    sourceMap: true,
    plugins: [
      nodeResolve({ jsnext: true, main: true }),
      commonjs(),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        plugins: [
          'transform-async-to-generator', [
            'transform-runtime', { polyfill: true, regenerator: true },
          ],
          ['transform-es2015-classes', { loose: true }],
        ],
        presets: ['es2015-rollup', 'react'],
      }),
      // To fix a React compilation issue
      // TODO: Change this from 'development' to 'production' during production
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  })
  // point to the entry file.
  .pipe(source('main.js', './src'))
  // buffer the output. most gulp plugins, including gulp-sourcemaps, don't support streams.
  .pipe(buffer())
  // tell gulp-sourcemaps to load the inline sourcemap produced by rollup-stream.
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(es3ify())
  // transform the code further here.
  .pipe(rename({ basename: moduleName }))
  // write the sourcemap alongside the output file.
  .pipe(sourcemaps.write('.'))
  // and output to ./dist/main.js as normal.
  .pipe(gulp.dest(paths.js.dest));
});

gulp.task('build:src', [
  'build:src:react-form',
  'build:src:es3-form',
]);

gulp.task('watch:build:src', () => {
  gulp.watch(paths.js.main, ['build:src:react-form']);
  gulp.watch(paths.js.es3, ['build:src:es3-form']);
});


gulp.task('build:sass', () => {
  return gulp.src(paths.sass.main)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer({ browsers: ['last 15 versions'] })]))
  .pipe(rename({ basename: moduleName }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('watch:build:sass', () => {
  gulp.watch(paths.sass.src, ['build:sass']);
});

gulp.task('build', [
  'build:src',
  'build:sass',
]);

gulp.task('watch', [
  'watch:build:sass',
  'watch:build:src',
]);

gulp.task('dev', ['copy-dependencies', 'build', 'watch']);
