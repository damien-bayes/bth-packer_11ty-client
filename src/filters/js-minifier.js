"use strict";

/* ******************* */
/* THIRD-PARTY IMPORTS */
/* ******************* */
const terser = require("terser");

const minifyJs = content => {
  const minifiedContent = terser.minify(content);

  if (minifiedContent.error) {
    console.warn("Terser error has been occurred", minifiedContent.error);
    return content;
  }

  return minifiedContent.code;
}

module.exports = {
  minifyJs
}