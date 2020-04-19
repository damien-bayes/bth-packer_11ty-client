/**
 * Gulp Configuration
 * 
 * Project: Baythium Packer
 * File: /gulpfile.js
 * Initial author: Damien Bayes <damien.bayes.db@gmail.com>
 */

/* THIRD-PARTY IMPORTS */
const gulp = require("gulp");

/* Image-processing plugins */
/* @see: https://www.npmjs.com/package/imagemin-svgo */
const imagemin = require("imagemin");
const imageminSvgo = require("imagemin-svgo");

/* JavaScript related plugins */
const uglify = require("gulp-uglify");
const pump = require("pump");

/* Check if a current process is in development mode? */
devBuild = (process.env.NODE_ENV !== "production") || (process.env.ELEVENTY_ENV !== "production");
console.info("Mode:", devBuild);

/* A task function for testing */
gulp.task("hello", async () => {
  return new Promise((resolve, reject) => {
    console.log("Hello World!");
    resolve();
  });
});

/* A task function for optimizing svg images */
gulp.task("optimize-svg", async () => {
  await imagemin(["src/images/*.svg"], "dist/images", {
    use: [
      imageminSvgo({
        plugins: [{ removeViewBox: false }]
      })
    ]
  });

  console.log("Images optimized");
});

/* A task function for compressing javascript files */
gulp.task("compress-js", async () => {
  pump([
    gulp.src("src/js/*.js"),
    uglify(),
    gulp.dest("dist/js")
  ]);
});