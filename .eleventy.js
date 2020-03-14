"use strict";

const sass = require("./config/sass-processing");
const Nunjucks = require("nunjucks");
const fs = require("fs");
const htmlmin = require("html-minifier");

module.exports = config => {
  //Watching for modificaions in style directory
  sass("./src/styles/bayesian-aspectus.scss", "./dist/styles/bayesian-aspectus.css");

  /*
  WARNING: Most likely, the "_includes" is being searched in the current directory, NOT in the original 11ty folder 
  and in this case the 11ty configures required environment options on its own
  */

  let nunjucksEnvironment = new Nunjucks.Environment(
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

  config.addTransform("htmlmin", (content, outputPath) => {
    if(outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });

      return minified;
    }

    return content;
  });

  config.addPassthroughCopy("css");
  config.addPassthroughCopy("js");
  config.addPassthroughCopy("images");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },

    templateFormats: [
      "njk",
      "html", 
      "md",
      "liquid",
      "css",
      "svg",
    ],

    pathPrefix: "/",

    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "liquid",
    dataTemplateEngine: "njk",

    /*
    setQuietMode: true,
    passthroughFileCopy: true
    */
  }
}