/**
 * 编译所有 scss 到 dist/css
 * @type {GulpClient.Gulp | GulpClient}
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssmin = require('gulp-cssmin');

const src = './packages/theme';
const dist = './dist';

gulp.task('compile', () => {
  return gulp.src([`${src}/!(variables).scss`])
             .pipe(sass.sync({ outputStyle: 'expanded' }))
             .pipe(postcss([autoprefixer()]))
             // .pipe(cssmin())
             .pipe(gulp.dest(`${dist}/css`));
});

gulp.task('copyfont', () => {
  return gulp.src(`${src}/fonts/**/*.*`)
             .pipe(gulp.dest(`${dist}/css/fonts`));
});

// 监听文件变动自动编译和复制
gulp.task('watch', () => {
  gulp.watch(`${src}/**/*.scss`, gulp.parallel('compile'));
  gulp.watch(`${src}/fonts/**`, gulp.parallel('copyfont'));
});

// gulp.task('default', gulp.parallel('watch'));
gulp.task('default', gulp.series('compile', 'copyfont'));
