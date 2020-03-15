/**
 * NOTE: Available to all templates
 */

const package = require("../../package.json");

module.exports = {
  name: "Bayesian Packer",

  version: package.version,

  url: "https://packer.bayesianflow.space",

  description: package.description,

  author: {
    name: "Damien Bayes",
    email: "damien.bayes.db@gmail.com",
    github: "https://github.com/damien-bayes",
    facebook: "https://www.facebook.com/damien.bayes.db1",
    twitter: "https://twitter.com/damien_bayes"
  },
  
  environment: process.env.ELEVENTY_ENV
}