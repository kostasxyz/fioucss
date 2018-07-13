var gulp             = require('gulp');
var sass             = require('gulp-sass');
const rename         = require('gulp-rename');
const autoprefixer   = require('gulp-autoprefixer');
const cleanCSS       = require('gulp-clean-css');
const util           = require('gulp-util');
const connect        = require('gulp-connect');
const production     = (process.env.NODE_ENV == 'production');


gulp.task('sass', done => {
    const dest = production ? 'dist' : 'public';

    gulp.src('./src/scss/fiou.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        //https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api
        .pipe(production ? cleanCSS({compatibility: 'ie9'}) : util.noop() )
        .pipe(gulp.dest(dest))
        .pipe(!production ? connect.reload() : util.noop());

    return done();
});

//Default
gulp.task('default', ['sass'], done => {
    return done();
});

// Build
gulp.task('build', ['sass'], done => {
    return done();
});

// Watch files
gulp.task('watch', () => {
  gulp.watch('./src/scss/**/*.s[ac]ss', ['sass']);
});

// Server
gulp.task('server', () => {
  return connect.server({
    root: 'public',
    livereload: true
  });
});

// Dev
gulp.task('dev', ['sass', 'watch', 'server'], done => {
  return done();
});
