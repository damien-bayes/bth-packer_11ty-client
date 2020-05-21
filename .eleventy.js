/**
 * Project: Bayesian Packer
 *
 * This project is a part of Bayesian Ecosystem
 * Initial author: Damien Bayes (damien.bayes.db@gmail.com)
 */

"use strict";

/* ******************* */
/* THIRD-PARTY IMPORTS */
/* ******************* */
require("module-alias/register");

/* ************** */
/* CUSTOM IMPORTS */
/* ************** */
const
  sass = require("@config/sass"),
  eleventy = require("@config/eleventy"),
  nunjucks = require("@config/nunjucks"),
  syntaxHighlight = require("@config/syntax-highlight");

/* ************************************************************************* */

module.exports = eleventyConfig => {
  /* Watch for modificaions in style directory */
  sass("./src/styles/custom-baythium-aspectus.scss", "./dist/styles/custom-baythium-aspectus.min.css");
  eleventy(eleventyConfig);
  nunjucks(eleventyConfig);
  syntaxHighlight(eleventyConfig);

  return {
    dir: {
      /* NOTE: These values are both relative to your input directory */

      input: "src",

      /* Path where the finished templates will be written to */
      output: "dist",

      includes: "_includes",

      // layouts: "_layouts",

      data: "_data"
    },

    /* 
      Specify which types of templates should be transformed

      NOTE: If a file format is not recognized by Eleventy as a valid template file extension, 
      Eleventy will simply copy this file directly to your output.
    */
    templateFormats: [
      "njk",
      "html", 
      "md",
      "css",
      "svg",
      "webp",
      "11ty.js"
    ],

    /* Deploy to a subdirectory with a path prefix */
    pathPrefix: "/",

    /* Set the default template engine for html files */
    htmlTemplateEngine: "njk",

    /* Set the default template engine for markdown files */
    markdownTemplateEngine: "njk",

    /* Set the default template engine for global data files */
    dataTemplateEngine: "njk",

    /* Change exception case suffix for html files */
    htmlOutputSuffix: "-o",

    /* Change file suffix for template and directory data files */
    jsDataFileSuffix: ".11tydata"
  }
}
