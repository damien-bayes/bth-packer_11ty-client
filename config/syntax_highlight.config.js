/**
 * Syntax Highlight Configuration
 * 
 * Project: Baythium Packer
 * File: /config/eleventy.config.js
 * Initial author: Damien Bayes <damien.bayes.db@gmail.com>
 */

"use strict";

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

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

module.exports = eleventyConfig => {
  /* PLUGINS */
  eleventyConfig.addPlugin(syntaxHighlight, options || {});
};