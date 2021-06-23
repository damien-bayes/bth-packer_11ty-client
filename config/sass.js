/**
 * SASS/SCSS Configuration
 *
 * File: /config/sass.config.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

/* ************** */
/* SYSTEM IMPORTS */
/* ************** */
const
  fs = require("fs-extra"),
  path = require("path");

/* ******************* */
/* THIRD-PARTY IMPORTS */
/* ******************* */
const sass = require("sass");

/* ************************************************************************* */

module.exports = (scssPath, cssPath) => {
  /* If cssPath directory doesn't exist... */
  if (!fs.existsSync(path.dirname(cssPath))) {
    /* Encapsulate rendered css from scssPath into result variable */
    const result = sass.renderSync({ file: scssPath });

    /* Create cssPath directory recursively then write result css string to cssPath file */
    fs.mkdir(path.dirname(cssPath), { recursive: true })
      .then(() => fs.writeFile(cssPath, result.css.toString()))
      .catch(error => console.error(error));
  }

  /* Watch for changes to scssPath directory... */
  fs.watch(path.dirname(scssPath), () => {
    console.log(`Watching ${path.dirname(scssPath)}...`);

    // Encapsulate rendered css from scssPath into watchResult variable
    const watchResult = sass.renderSync({ file: scssPath });

    // Then write result css string to cssPath file
    fs.writeFile(cssPath, watchResult.css.toString())
      .catch(error => console.error(error));
  });
};
