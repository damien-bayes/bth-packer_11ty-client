/**
 * Eleventy: Passthrough
 *
 * File: /config/eleventy/passthrough.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

module.exports = eleventyConfig => {
  /* NOTE: Using this feature, will likely speed up your build process */
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addPassthroughCopy({
    "node_modules/@damien-bayes/baythium-aspectus_package/dist/baythium-aspectus.css": "styles/baythium-aspectus.min.css",
    "node_modules/@damien-bayes/baythium-aspectus_package/dist/baythium-aspectus.js": "js/baythium-aspectus.min.js",

    "node_modules/@damien-bayes/baythium-vector_package/dist/baythium-vector.css": "styles/baythium-vector.min.css",
    "node_modules/@damien-bayes/baythium-vector_package/dist/fonts/fontawesome": "fonts/fontawesome"
  });

  eleventyConfig.addPassthroughCopy({
    "src/js": "js/"
  });
}