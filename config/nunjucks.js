/**
 * Nunjucks Configuration
 *
 * File: /config/nunjucks.config.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

/* ******************* */
/* THIRD-PARTY IMPORTS */
/* ******************* */
const Nunjucks = require("nunjucks");

/* ************************************************************************* */

module.exports = (eleventyConfig) => {
  /*
   * WARNING: Most likely, the "_includes" is being searched in the current directory, NOT in the original 11ty folder
   * and in this case the 11ty configures required environment options on its own
   */

  const options = {
    /* Control if output with dangerous characters are escaped automatically */
    autoescape: true,
    /* Never use a cache and recompile templates each time */
    noCache: true,
    /* Reload templates when they are changed */
    watch: true
  };

  const nunjucksInstance = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src/_includes"),
    options
  );

  eleventyConfig.setLibrary("njk", nunjucksInstance);

  return nunjucksInstance;
};
