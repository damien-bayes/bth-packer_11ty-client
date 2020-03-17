/**
 * Project: Bayesian Packer
 * This project is a part of Bayesian Ecosystem
 * Initial author: Damien Bayes (damien.bayes.db@gmail.com)
 * 
 * NOTE: Available to all templates
 */

"use strict";

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
  company: {
    name: "Bayesian Ecosystem"
  },

  locale: "en",
  languages: [
    {
      label: "English",
      code: "en"
    },
    {
      label: "Русский",
      code: "ru"
    },
    {
      label: "Deutsche",
      code: "de"
    }
  ],
  
  buildTime: new Date(),
  environment: process.env.ELEVENTY_ENV
}