const gulp = require('gulp');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
const { series , parallel, src, dest,watch} = gulp;
  
function bundle() {
    // body omitted
    // cb();
    return src('src/index.js')
    .pipe(babel({
        presets: ['@babel/env',"@babel/preset-react"]
    }))
    .pipe(gulp.dest('dist'))
  }
function javascript(cb) {
  return src('src/app.js')
  .pipe(babel({
      presets: ['@babel/env',"@babel/preset-react"]
  }))
  .pipe(gulp.dest('dist'))
  }
  
function css() {
  return pipeline(
    gulp.src('src/*.js'),
    uglify(),
    gulp.dest('dist')
);
  }
// gulp.task('bundle', () =>
//   gulp.src('src/index.js')
//       .pipe(babel({
//           presets: ['@babel/env',"@babel/preset-react"]
//       }))
//       .pipe(gulp.dest('dist'))
// ) 
exports.build = series(javascript, bundle);
exports.build2 = parallel(javascript, css);