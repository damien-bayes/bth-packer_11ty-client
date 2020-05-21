/**
 * Eleventy Configuration
 *
 * File: /config/eleventy/index.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

/* ************** */
/* SYSTEM IMPORTS */
/* ************** */
const fs = require("fs");

/* CUSTOM IMPORTS */
const
  applyCustomCollection = require("./custom-collections"),
  applyFilters = require("./filters"),
  applyLayoutAliases = require("./layout-aliases"),
  applyPassThrough = require("./passthrough"),
  applyPlugins = require("./plugins"),
  applyShortCodes = require("./shortcodes"),
  applyTransforms = require("./transforms");

/* ************************************************************************* */

module.exports = eleventyConfig => {
  /* Enable quiet mode to reduce the console noise */
  eleventyConfig.setQuietMode(false);

  /* Watch for JavaScript dependencies */
  eleventyConfig.setWatchJavaScriptDependencies(true);

  /* Add scss directory for Eleventy to watch */
  eleventyConfig.addWatchTarget("src/styles/");

  /*
    Configure Browsersync to do the 404 routing

    WARNING: Only works in the development mode, in production you must use Nginx instructions
  */
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: (err, browserSync) => {
        const content404 = fs.readFileSync("dist/exceptions/404/index.html");

        browserSync.addMiddleware("*", (req, res) => {
          /* Provide the 404 content without redirection */
          res.write(content404);

          /* Add 404 http status code into the request header */
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end();
        });
      },
    }
  });

  applyCustomCollection(eleventyConfig);
  applyFilters(eleventyConfig);
  applyLayoutAliases(eleventyConfig);
  applyPassThrough(eleventyConfig);
  applyPlugins(eleventyConfig);
  applyShortCodes(eleventyConfig);
  applyTransforms(eleventyConfig);
};