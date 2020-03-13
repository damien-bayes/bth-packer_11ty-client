const package = require("../../package.json");

module.exports = {
  "title": "Bayesian Packer",
  "version": package.version,
  "url": "https://packer.bayesianflow.space",
  "description": package.description,
  "author": {
    "name": "Damien Bayes",
    "email": "damien.bayes.db@gmail.com"
  },
  environment: process.env.ELEVENTY_ENV
}