"use strict";

const sass = require("./config/sass-processing");
const Nunjucks = require("nunjucks");
const fs = require("fs");
const htmlmin = require("html-minifier");

module.exports = config => {
  //Watching for modificaions in style directory
  sass("./src/styles/bayesian-aspectus.scss", "./dist/styles/bayesian-aspectus.css");

  /* Enable quiet mode to reduce console noise */
  config.setQuietMode(false);

  /* Watch JavaScript dependencies */
  config.setWatchJavaScriptDependencies(true);

  /* Add scss directory for Eleventy to watch */
  config.addWatchTarget("./src/styles/");

  /*
  WARNING: Most likely, the "_includes" is being searched in the current directory, NOT in the original 11ty folder 
  and in this case the 11ty configures required environment options on its own
  */

  const nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src/_includes")
  );

  config.setLibrary("njk", nunjucksEnvironment);
  
  /*
  config.setBrowserSyncConfig({
    callbacks: {
      ready: (err, browserSync) => {
        const content404 = fs.readFileSync("./src/page-not-found.njk");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content404);
          res.end();
        });
      },
    }
  });*/

  /* Minify HTML output */
  config.addTransform("htmlmin", (content, outputPath) => {
    if(outputPath.endsWith(".html")) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });

      return minified;
    }

    return content;
  });

  /* NOTE: Using this feature, will likely speed up your build process */
  config.addPassthroughCopy("./src/js");
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy("./src/fonts");

  // config.addPassthroughCopy("./src/styles");

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