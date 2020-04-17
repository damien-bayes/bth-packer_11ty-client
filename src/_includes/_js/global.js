/**
 * Global
 * 
 * Project: Baythium Packer
 * File: /src/_includes/_js/global.js
 * Initial author: Damien Bayes <damien.bayes.db@gmail.com>
 */

"use strict";

window.addEventListener("DOMContentLoaded", e => {
  /* Google Analytics */
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  gtag("js", new Date());
  gtag("config", "UA-163071822-1");

  /* Google Tag Manager */
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js"
    });
    
    var f = d.getElementsByTagName(s)[0], j=d.createElement(s), dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-5WH62H7");
});