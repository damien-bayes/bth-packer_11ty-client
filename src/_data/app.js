/**
 * App
 *
 * File: /src/_data/app.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

const p = require("../../package.json");
 
const options = {
  name: "Baythium Packer",
  
  url: "https://packer.baythium.com",
  baseUrl: "/",
  authUrl: "https://auth.baythium.com",
  signUpUrl: "https://auth.baythium.com/sign-up",
  signInUrl: "https://auth.baythium.com/sign-in",
  supportUrl: "https://support.baythium.com",
  policyUrl: "https://policy.baythium.com",

  /* Auth Endpoints */
  authAuthorizationEndpoint: "https://auth.baythium.com/authorize",
  authTokenEndpoint: "https://auth.baythium.com/token",
  authRevocationEndpoint: "https://auth.baythium.com/revoke",
  authUserInfoEndpoint: "https://auth.baythium.com/userinfo",
  authIntrospectionEndpoint: "https://auth.baythium.com/introspect",

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
  environment: process.env.ELEVENTY_ENV ? process.env.ELEVENTY_ENV.replace(/"/g, "").trim() : "production",

  clientId: process.env.CLIENT_ID || 0
};

module.exports = options;
