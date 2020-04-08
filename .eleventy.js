/**
 * Project: Bayesian Packer
 * This project is a part of Bayesian Ecosystem
 * Initial author: Damien Bayes (damien.bayes.db@gmail.com)
 */

"use strict";

const sass = require("./config/sass-processing.config");
const Nunjucks = require("nunjucks");

module.exports = config => {
  // Watch for modificaions in style directory
  sass("./src/styles/custom-baythium-aspectus.scss", "./dist/styles/custom-baythium-aspectus.css");

  // require("./config/nunjucks.config")(config);
  const nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src/_includes")
  );

  config.setLibrary("njk", nunjucksEnvironment);

  require("./config/eleventy.config")(config);

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
      "11ty.js",

      /*
      "css",
      "svg",
      "webp"
      */
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