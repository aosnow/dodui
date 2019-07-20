/**
 * 编译所有 scss 到 dist/css
 * @type {GulpClient.Gulp | GulpClient}
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssmin = require('gulp-cssmin');
const gcmq = require('gulp-group-css-media-queries');

const src = './packages/theme';
const dist = './dist/css';

gulp.task('compile', () => {
  return gulp.src([`${src}/!(variables).scss`])
             .pipe(sass.sync({ outputStyle: 'expanded' }))
             .pipe(postcss([autoprefixer()]))
             .pipe(gcmq())
             // .pipe(cssmin())
             .pipe(gulp.dest(`${dist}`));
});

gulp.task('compile-mobile', () => {
  return gulp.src([`${src}/mobile/*.scss`])
             .pipe(sass.sync({ outputStyle: 'expanded' }))
             .pipe(postcss([autoprefixer()]))
             .pipe(cssmin())
             .pipe(gulp.dest(`${dist}/mobile`));
});

gulp.task('copyfont', () => {
  return gulp.src(`${src}/fonts/**/*.*`)
             .pipe(gulp.dest(`${dist}/fonts`));
});

// 监听文件变动自动编译和复制
gulp.task('watch', () => {
  gulp.watch(`${src}/**/*.scss`, gulp.series('compile', 'compile-mobile'));
  gulp.watch(`${src}/fonts/**`, gulp.parallel('copyfont'));
});

// gulp.task('default', gulp.parallel('watch'));
gulp.task('default', gulp.series('compile', 'compile-mobile', 'copyfont'));
