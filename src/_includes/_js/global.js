/**
 * Global
 * 
 * Project: Baythium Packer
 * File: /src/_includes/_js/global.js
 * Initial author: Damien Bayes <damien.bayes.db@gmail.com>
 */

"use strict";

window.addEventListener("DOMContentLoaded", e => {
  console.log("DOM fully loaded and parsed");
  
  /* Initialize Google Analytics */
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  gtag("js", new Date());
  gtag("config", "UA-163071822-1");
});
