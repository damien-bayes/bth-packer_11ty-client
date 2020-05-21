/**
 * Eleventy: Filters
 *
 * File: /config/eleventy/filters.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

const { convertToHumanReadableFormat } = require("@filters/datetime");
const { minifyJs } = require("@filters/js-minifier");

/* ************************************************************************* */

module.exports = eleventyConfig => {
  /* Add filter for coverting UTC datetime to human readable format */
  eleventyConfig.addFilter("humanReadableFormat", convertToHumanReadableFormat);

  /* Add filter for minifying JavaScript files using terser module */
  eleventyConfig.addFilter("minifiedJs", minifyJs);
}