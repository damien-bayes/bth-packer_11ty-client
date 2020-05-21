"use strict";

const htmlmin = require("html-minifier");

const minifyHtml = (content, outputPath) => {
  if (outputPath.endsWith(".html")) {
    const options = {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    };

    return htmlmin.minify(content, options);
  }

  return content;
}

module.exports = {
  minifyHtml
}