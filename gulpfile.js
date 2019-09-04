const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const CSS_FILES = ['public/css/*.css'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', gulp.series('scripts', () => {
  gulp.watch('src/**/*.ts', ['scripts']);
}));

gulp.task('jsonAssets', function jsonAssets() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
});

gulp.task('cssAssets', function cssAssets() {
  return gulp.src(CSS_FILES, {base: './public'})
  .pipe(gulp.dest('dist/public'));
});

gulp.task('assets', gulp.parallel('jsonAssets', 'cssAssets') );

gulp.task('default', gulp.parallel('watch', 'assets'));

