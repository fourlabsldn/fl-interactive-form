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
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();

const moduleName = 'fl-interactive-form';
const paths = {
  js: {
    src: './src/js/**/*',
    main: './src/js/react-main.js',
    es3: './src/js/es3-main.js',
    dist: './dist/',
  },
  sass: {
    src: './src/sass/**/*',
    main: './src/sass/main.scss',
    dist: './dist/',
  },
  demo: {
    main: './examples/all_field_types/index.html',
    src: './examples/all_field_types',
    dep: './examples/all_field_types/dependencies',
  },
};

gulp.task('copy-dependencies', () => {
  return DepLinker.copyDependenciesTo(paths.demo.dep);
});

gulp.task('build:src:es3-form', () => {
  // Copy es3 form builder.
  gulp.src([paths.js.es3, 'src/js/utils/ie8-polyfills.js'])
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(concat(`${moduleName}-es3.js`))
  .pipe(es3ify())
  .pipe(gulp.dest(paths.js.dist));
});

gulp.task('build:src:react-form', () => {
  return rollup({
    // Function names leak to the global namespace. To avoid that,
    // let's just put everything within an immediate function, this way variables
    // are all beautifully namespaced.
    banner: '(function () {',
    footer: '}());',
    entry: paths.js.main,
    sourceMap: true,
    plugins: [
      nodeResolve({ jsnext: true, main: true }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        plugins: ['transform-async-to-generator', 'external-helpers-2'],
        presets: ['es2017', 'react'],
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
  // transform the code further here.
  .pipe(rename({ basename: moduleName }))
  // write the sourcemap alongside the output file.
  .pipe(sourcemaps.write('.'))
  // and output to ./dist/main.js as normal.
  .pipe(gulp.dest(paths.js.dist));
});

gulp.task('build:src', [
  'build:src:react-form',
  'build:src:es3-form',
]);

gulp.task('watch:build:src', () => {
  gulp.watch(paths.js.src, ['build:src:react-form']);
  gulp.watch(paths.js.es3, ['build:src:es3-form']);
});


gulp.task('build:sass', () => {
  return gulp.src(paths.sass.main)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer({ browsers: ['last 15 versions'] })]))
  .pipe(rename({ basename: moduleName }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.sass.dist));
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
gulp.task('demo', ['copy-dependencies', 'build', 'watch'], () => {
  browserSync.init({
    startPath: paths.demo.main,
    server: {
      baseDir: './',
      directory: true,
    },
  });

  gulp.watch(paths.demo.src).on('change', browserSync.reload);
  gulp.watch(paths.js.dist).on('change', browserSync.reload);
});
