const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const CSS_FILES = ['public/css/*.css'];
const JS_FILES = ['public/lib/*.js'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', function watchSrc() {
  return gulp.watch('src/**/*.ts', gulp.series('scripts'));
});

gulp.task('jsonAssets', function jsonAssets() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
});

gulp.task('jsAssets', function jsAssets() {
  return gulp.src(JS_FILES, {base: './public'})
  .pipe(gulp.dest('dist/public'));
});

gulp.task('cssAssets', function cssAssets() {
  return gulp.src(CSS_FILES, {base: './public'})
  .pipe(gulp.dest('dist/public'));
});

gulp.task('build', gulp.parallel('jsonAssets', 'jsAssets', 'cssAssets', 'scripts') );

gulp.task('default', gulp.parallel('watch', 'build'));

