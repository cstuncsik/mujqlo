'use strict';
var browserSync = require('browser-sync'),
    gulp        = require('gulp'),
    stylish     = require('jshint-stylish'),
    runSequence = require('run-sequence'),
    del         = require('del'),
    _           = require('lodash'),
    jshint      = require('gulp-jshint'),
    cache       = require('gulp-cached'),
    plumber     = require('gulp-plumber'),
    size        = require('gulp-size'),
    uglify      = require('gulp-uglify'),
    using       = require('gulp-using'),
    util        = require('gulp-util'),
    paths       = {
        src: {
            root: 'src'
        },
        dist: {
            root: 'dist'
        }
    };

_.extend(paths.src, {
    js: paths.src.root + '/**/*.js',
    html: paths.src.root + '/**/*.html'
});

_.extend(paths.dist, {
    js: paths.dist.root,
});

gulp.task('clean', function() {
    del([
        paths.dist.root
    ]);
});

gulp.task('lint', function() {
    return gulp.src(paths.src.js)
        .pipe(plumber())
        .pipe(cache('linting'))
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .on('error', util.log);
});

gulp.task('uglify', function() {
  return gulp.src(paths.src.js)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(using())
    .pipe(size({
        showFiles: true,
        title: 'ugify'
    }))
    .pipe(gulp.dest(paths.dist.js));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ['dist', 'src', './']
        }
    });
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});

gulp.task('watch', function() {
    gulp.watch([paths.src.js], ['lint', 'bs-reload']);
    gulp.watch([paths.src.html], ['bs-reload']);
});

gulp.task('default', function() {
    runSequence('clean',[
            'watch'
        ],
        'browser-sync');
});

gulp.task('build', function() {
    runSequence('clean', [
            'lint',
            'uglify',
        ],
        'browser-sync');
});
