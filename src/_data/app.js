/**
 * App
 * 
 * Project: Baythium Packer
 * File: /src/_data/app.js
 * Initial author: Damien Bayes <damien.bayes.db@gmail.com>
 */

"use strict";

const p = require("../../package.json");
 
const options = {
  name: "Baythium Packer",
  url: "https://packer.baythium.com",

  version: p.version,
  description: p.description,
  keywords: p.keywords,
  license: p.license,

  author: {
    name: p.author.name,
    email: p.author.email,

    github: "https://github.com/damien-bayes",
    facebook: "https://www.facebook.com/damien.bayes.db1",
    twitter: "https://twitter.com/damien_bayes"
  },

  company: {
    name: "Baythium Ecosystem"
  },

  /* Default language */
  locale: "en",

  /* An array of all the languages the website uses */
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
};

console.info(`${options.name} is in ${options.environment} state`);

module.exports = options;
