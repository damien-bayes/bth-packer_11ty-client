/**
 * Eleventy: Transforms
 *
 * File: /config/eleventy/transforms.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

/* ************** */
/* CUSTOM IMPORTS */
/* ************** */
const { minifyHtml } = require("@transforms/html-minifier");

/* ************************************************************************* */

module.exports = eleventyConfig => {
  /* Add transformation for minifying HTML output */
  eleventyConfig.addTransform("htmlmin", minifyHtml);
}