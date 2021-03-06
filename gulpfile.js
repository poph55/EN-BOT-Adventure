'use strict';

// Define libraries.
const gulp   = require( 'gulp' ),
      babel  = require( 'gulp-babel' ),
      concat = require( 'gulp-concat' ),
      sass   = require( 'gulp-dart-sass' );

// Define CSS source and distribution directories.
const cssSrc  = './src/sass/**/*.scss';
const cssDist = './dist/css';

// Task to compile CSS files.
gulp.task( 'sass', function() {
  return gulp.src( cssSrc )
    .pipe( sass( { outputStyle: 'compressed' } ) )
    .pipe( gulp.dest( cssDist ) );
});

// Define JS source and distribution directories.
const jsSrc = [
  './node_modules/jquery/dist/jquery.min.js',
  './src/js/**/*.js'
];
const jsDist = './dist/js';

// Task to compile JS files.
gulp.task( 'js', function() {
  return gulp.src( jsSrc )
  .pipe( babel( { presets: ['minify'] } ) )
  .pipe( concat( 'scripts.min.js' ) )
  .pipe( gulp.dest( jsDist ) );
});

// Gulp tasks.
gulp.task( 'default', gulp.series( 'sass', 'js' ) );
