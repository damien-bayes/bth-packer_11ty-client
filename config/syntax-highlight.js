/**
 * Syntax Highlight Configuration
 *
 * File: /config/eleventy.config.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

/* ******************* */
/* THIRD-PARTY IMPORTS */
/* ******************* */
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

/* ************************************************************************* */

const options = {
  /* Change which syntax highlighters are installed */
  templateFormats: ["*"],

  /* Or, just njk and md syntax highlighters (do not install liquid) */
  // templateFormats: ["njk", "md"],

  /* Init callback lets you customize Prism */
  /*
  init: function({ Prism }) {
    Prism.languages.myCustomLanguage = "";
  },
  */

  /*
   * Added in 3.0, set to true to always wrap lines in `<span class="highlight-line">` 
   * The default (false) only wraps when line numbers are passed in.
   */
  alwaysWrapLineHighlights: false
};

module.exports = (eleventyConfig) => {
  /* PLUGINS */
  eleventyConfig.addPlugin(syntaxHighlight, options || {});
};