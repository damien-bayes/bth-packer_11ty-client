/**
 * Project: Bayesian Packer
 * This project is a part of Bayesian Ecosystem
 * Initial author: Damien Bayes (damien.bayes.db@gmail.com)
 */

const Nunjucks = require("nunjucks");

module.exports = eleventyConfig => {
  /*
  WARNING: Most likely, the "_includes" is being searched in the current directory, NOT in the original 11ty folder 
  and in this case the 11ty configures required environment options on its own
  */

  const nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("../src/_includes")
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);
}