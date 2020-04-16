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

  baseUrl: "/",
  authUrl: "https://auth.baythium.com",
  supportUrl: "https://support.baythium.com",
  policyUrl: "https://policy.baythium.com",

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
  locale: process.env.LANGUAGE || "en",

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
  environment: process.env.ELEVENTY_ENV.replace(/"/g, "").trim(),

  clientId: process.env.CLIENT_ID || 0
};

module.exports = options;
