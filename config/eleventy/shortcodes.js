/**
 * Eleventy: Shortcodes
 *
 * File: /config/eleventy/shortcodes.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

/* ************** */
/* CUSTOM IMPORTS */
/* ************** */
const { getCurrentYear } = require("@shortcodes/datetime");
const handleChangeLog = require("@shortcodes/handle-change-log");

/* ************************************************************************* */

module.exports = eleventyConfig => {
  /**
   * Setting up the changelog shortcode
   * 
   * @see: https://timothymiller.dev/posts/2020/adding-a-changelog-to-my-11ty-blog/
   */
  eleventyConfig.addNunjucksShortcode("changeLog", handleChangeLog);

  eleventyConfig.addNunjucksShortcode("currentYear", getCurrentYear);
}